// Default Template Code >>

const isLoggedIn = require('../../Middleware/auth')
var express = require('express');
var router = express.Router();

const {TwitterClient} = require('twitter-api-client')

const twitterClient = new TwitterClient({
  apiKey: process.env.TWITTER_CONSUMER_KEY,
  apiSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})



router.get('/trending', isLoggedIn, async (req, res) => {
    const data = await twitterClient.tweets.statusesRetweetsById({ id: '1499115291518898176', count: 25 });
  res.json(data)
})


module.exports = router;