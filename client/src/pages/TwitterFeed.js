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




    //     const tweets = [
    //     {
    //       created_at: 'Thu Mar 03 19:49:51 +0000 2022',
    //       id: 1499472139333746700,
    //       id_str: '1499472139333746691',
    //       text: 'Important warning: Starlink is the only non-Russian communications system still working in some parts of Ukraine, s… https://t.co/YmTwqJ5T0K',
    //       truncated: true,
    //       entities: { hashtags: [], symbols: [], user_mentions: [], urls: [Array] },
    //       source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    //       user: {
    //         id: 44196397,
    //         id_str: '44196397',
    //         name: 'Elon Musk',
    //         screen_name: 'elonmusk',
    //         location: '',
    //         description: '',
    //         url: null,
    //         entities: [Object],
    //         protected: false,
    //         followers_count: 76404077,
    //         friends_count: 112,
    //         listed_count: 87029,
    //         created_at: 'Tue Jun 02 20:12:29 +0000 2009',
    //         favourites_count: 12295,
    //         utc_offset: null,
    //         time_zone: null,
    //         geo_enabled: false,
    //         verified: true,
    //         statuses_count: 17044,
    //         lang: null,
    //         contributors_enabled: false,
    //         is_translator: false,
    //         is_translation_enabled: false,
    //         profile_background_color: 'C0DEED',
    //         profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',  
    //         profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
    //         profile_background_tile: false,
    //         profile_image_url: 'http://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_normal.jpg',
    //         profile_image_url_https: 'https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_normal.jpg',
    //         profile_banner_url: 'https://pbs.twimg.com/profile_banners/44196397/1576183471',   
    //         profile_link_color: '0084B4',
    //         profile_sidebar_border_color: 'C0DEED',
    //         profile_sidebar_fill_color: 'DDEEF6',
    //         profile_text_color: '333333',
    //         profile_use_background_image: true,
    //         has_extended_profile: true,
    //         default_profile: false,
    //         default_profile_image: false,
    //         following: true,
    //         follow_request_sent: false,
    //         notifications: false,
    //         translator_type: 'none',
    //         withheld_in_countries: []
    //       },
    //       geo: null,
    //       coordinates: null,
    //       place: null,
    //       contributors: null,
    //       is_quote_status: false,
    //       retweet_count: 39180,
    //       favorite_count: 333304,
    //       favorited: false,
    //       retweeted: false,
    //       lang: 'en'
    //     }
    //   ]


    //     contributors: null
    //     coordinates: null
    //     created_at: "Mon Mar 07 07:59:15 +0000 2022"
    //     display_text_range: [10, 43]
    //     entities: {hashtags: [], symbols: [],…}
    //     favorite_count: 10964
    //     favorited: false
    //     full_text: "@elonmusk That's a good definition of love."
    //     geo: null
    //     id: 1500742861855379500
    //     id_str: "1500742861855379456"
    //     in_reply_to_screen_name: "elonmusk"
    //     in_reply_to_status_id: 1500740461115461600
    //     in_reply_to_status_id_str: "1500740461115461632"
    //     in_reply_to_user_id: 44196397
    //     in_reply_to_user_id_str: "44196397"
    //     is_quote_status: false
    //     lang: "en"
    // original: {created_at: "Mon Mar 07 07:49:42 +0000 2022", id: 1500740461115461600, id_str: "1500740461115461632",…}
    //     contributors: null
    //     coordinates: null
    //     created_at: "Mon Mar 07 07:49:42 +0000 2022"
    //     entities: {hashtags: [], symbols: [], user_mentions: [], urls: []}
    //     favorite_count: 242942
    //     favorited: false
    //     geo: null
    //     id: 1500740461115461600
    //     id_str: "1500740461115461632"
    //     in_reply_to_screen_name: null
    //     in_reply_to_status_id: null
    //     in_reply_to_status_id_str: null
    //     in_reply_to_user_id: null
    //     in_reply_to_user_id_str: null
    //     is_quote_status: false
    //     lang: "en"
    //     place: null
    //     retweet_count: 31306
    //     retweeted: false
    //     source: "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>"
    //     text: "You are my favorite hello,\nAnd my hardest goodbye."
    //     truncated: false
    //     user: {id: 44196397, id_str: "44196397", name: "Elon Musk", screen_name: "elonmusk", location: "",…}
    //     contributors_enabled: false
    //     created_at: "Tue Jun 02 20:12:29 +0000 2009"
    //     default_profile: false
    //     default_profile_image: false
    //     description: ""
    //     entities: {description: {urls: []}}
    //     favourites_count: 12362
    //     follow_request_sent: false
    //     followers_count: 76931483
    //     following: true
    //     friends_count: 113
    //     geo_enabled: false
    //     has_extended_profile: true
    //     id: 44196397
    //     id_str: "44196397"
    //     is_translation_enabled: false
    //     is_translator: false
    //     lang: null
    //     listed_count: 87288
    //     location: ""
    //     name: "Elon Musk"
    //     notifications: false
    //     profile_background_color: "C0DEED"
    //     profile_background_image_url: "http://abs.twimg.com/images/themes/theme1/bg.png"
    //     profile_background_image_url_https: "https://abs.twimg.com/images/themes/theme1/bg.png"
    //     profile_background_tile: false
    //     profile_banner_url: "https://pbs.twimg.com/profile_banners/44196397/1576183471"
    //     profile_image_url: "http://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_normal.jpg"
    //     profile_image_url_https: "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_normal.jpg"
    //     profile_link_color: "0084B4"
    //     profile_sidebar_border_color: "C0DEED"
    //     profile_sidebar_fill_color: "DDEEF6"
    //     profile_text_color: "333333"
    //     profile_use_background_image: true
    //     protected: false
    //     screen_name: "elonmusk"
    //     statuses_count: 17091
    //     time_zone: null
    //     translator_type: "none"
    //     url: null
    //     utc_offset: null
    //     verified: true
    //     withheld_in_countries: []
    //     place: null
    //     retweet_count: 261
    //     retweeted: true
    //     source: "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>"
    //     truncated: false



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
