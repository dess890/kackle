require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')
const axios = require('axios')

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


// twitterClient.tweets.statusesUpdate({
//     status: tweet
// }).then (response => {
//     console.log("Tweeted!", response)
// }).catch(err => {
//     console.error(err)
// })

