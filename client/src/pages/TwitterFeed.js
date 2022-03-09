import React from 'react'
import { useState, useEffect } from 'react'
import { Text, HStack, VStack, Divider } from '@chakra-ui/react'
import { AiOutlineRetweet, AiOutlineHeart, AiFillCheckCircle } from "react-icons/ai";




function TwitterFeed() {

    const [tweets, setTweet] = useState([])

    useEffect(() => {
        fetch('/twitter/api/trending')
            .then(data => data.json())
            .then(tweets => {
                setTweet(tweets)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {tweets.length && tweets.map((tweet, i) => {
                const shortenRetweets = (tweet.retweet_count / 1000).toFixed(1) + 'K'
                const shortenFavorites = (tweet.favorite_count / 1000).toFixed(1) + 'K'

                return (
                    <div key={tweet.id}>
                        <HStack  >
                            <img src={tweet.user.profile_image_url} alt='profile pic' style={{ borderRadius: '50%' }} />
                            <h3>{tweet.user.name}</h3>
                            {tweet.verified = true ? <AiFillCheckCircle color='orange' /> : ""}
                            <Text style={{ opacity: '50%' }}>@{tweet.user.screen_name}</Text>
                        </HStack>
                        <VStack>

                            {tweet.original ?

                                <VStack fontSize={'sm'} backgroundColor='gray.100' borderRadius='md' padding='2'>
                                    <img src={tweet.original.user.profile_image_url} alt='profile pic' style={{ borderRadius: '50%' }} />
                                    <h3>{tweet.original.user.name}</h3>
                                    {/* {tweet.original.verified = true ? <AiFillCheckCircle color='orange' /> : ""} */}
                                    <Text style={{ opacity: '50%' }}>@{tweet.original.user.screen_name}</Text>
                                    <Text fontSize='sm' paddingTop='2'>{tweet.original.text}</Text>
                                </VStack> : ""}

                            <Text fontSize='sm' paddingTop='3'>{tweet.full_text}</Text>
                            {/* <Text fontSize='sm'>{tweet.original.text}</Text> */}

                        </VStack>
                        <HStack padding='4'>
                            <AiOutlineRetweet className='retweet' />
                            <Text fontSize='xs' >{tweet.retweet_count > 1000 ? shortenRetweets : tweet.retweet_count}</Text>
                            <AiOutlineHeart className='retweets' />
                            <Text fontSize='xs'>{tweet.favorite_count > 10000 ? shortenFavorites : tweet.favorite_count}</Text>
                        </HStack>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default TwitterFeed
