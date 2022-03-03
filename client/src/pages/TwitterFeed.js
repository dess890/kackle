import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'



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
        },[])



        return (
            <div>
                {tweets.length && tweets.map((tweet) => {
                    return (
                        <p key={tweet.id}>{tweet.text}</p>
                    )
                })}
            </div>
        )
    
}

export default TwitterFeed
