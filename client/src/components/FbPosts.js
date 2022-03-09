import { HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
moment().format();


function FbPosts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(false)
    const [pics, setPics] = useState('')
    const userRedux = useSelector(state => state.user.user)
    let userDisplayName = userRedux.username

    if(userRedux !== null && userRedux.facebookId !== null){
        userDisplayName = userRedux.facebookAuth.profile.displayName
    }
    
    



    useEffect(() => {
        fetch('/facebook/api/feed')
            .then(data => data.json())
            .then(posts => {
                if (posts.error) {
                    setError(true)
                    return
                }
                setPosts(posts.data)
            })
            .catch((error) => {
                console.log(error)
            })
        fetch('/facebook/api/picture')
            .then(data => data.json())
            .then(pics => {
                if (pics.error) {
                    setError(true)
                    return
                }
                setPics(pics.data.url)
            })
    }, [])


    if (error) {
        return 'could not load facebook feed :('
    }

    if (posts.length) {
        return (
            <div>
                {posts.map((post) => {
                    return <div key={post.id}>
                        <HStack>
                            <img src={pics} style={{ borderRadius: '50%' }}></img>
                            {/* <Text>{userDisplayName}</Text> */}
                            <Text fontSize='sm'>{moment(`${post.created_time}`).fromNow()}</Text>
                        </HStack>
                        <VStack>
                            <Text fontSize='md'>{post.message}</Text>
                        </VStack>
                        <hr />
                    </div>
                })}
            </div>
        )
    }
    return 'loading'
}

export default FbPosts