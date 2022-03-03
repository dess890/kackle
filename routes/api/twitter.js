// Default Template Code >>

const isLoggedIn = require('../../Middleware/auth')
var express = require('express');
var router = express.Router();

const { TwitterClient } = require('twitter-api-client')



//endpoint for user's home timeline, includes posts from ppl they follow
// GET statuses/home_timeline
// TwitterClient.tweets.statusesHomeTimeline(parameters)

// get retweets from id, only when logged in
router.get('/trending', isLoggedIn, async (req, res) => 

{const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_CONSUMER_KEY,
    apiSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


// const data = await twitterClient.tweets.statusesRetweetsById({ id: '1499115291518898176', count: 25 });
//     console.log(data)
//     res.json(data)
// })
try {
    const data = await twitterClient.tweets.statusesHomeTimeline();
    console.log(data)
    res.json(data)
} catch (error) {
    console.error(error)
    res.status(500).json({error: "fail"})
}

    
    
// accessToken: req.user.twitterAuth.accessToken,
// accessTokenSecret: req.user.twitterAuth.refreshToken
})
module.exports = router;