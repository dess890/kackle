// Default Template Code >>

const isLoggedIn = require('../../Middleware/auth')
var express = require('express');
var router = express.Router();

const {TwitterClient} = require('twitter-api-client')

router.get('/trending', isLoggedIn, async (req, res) => {
  const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_CONSUMER_KEY,
    apiSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: req.user.twitterAuth.accessToken,
    accessTokenSecret: req.user.twitterAuth.refreshToken 
})
    const data = await twitterClient.tweets.statusesRetweetsById({ id: '1499115291518898176', count: 25 });
  res.json(data)
})


module.exports = router;