// Default Template Code >>

const isLoggedIn = require('../Middleware/auth')
var express = require('express');
var router = express.Router();

require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_API_KEY,
  apiSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})



router.get('/trending', isLoggedIn, (req, res) => {
    const data = await twitterClient.tweets.statusesRetweetsById({ id: '1499115291518898176', count: 25 });
  res.json(data)
})


module.exports = router;