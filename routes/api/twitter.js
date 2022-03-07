// Default Template Code >>

const isLoggedIn = require('../../Middleware/auth')
const express = require('express');
const router = express.Router();

const { TwitterClient } = require('twitter-api-client')



router.get('/trending', isLoggedIn, async (req, res) => 

{const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_CONSUMER_KEY,
    apiSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


// const data = await twitterClient.tweets.statusesRetweetsById({ id: '1499115291518898176', count: 2 });
//     console.log(data)
//     res.json(data)


try {
    const data = await twitterClient.tweets.statusesHomeTimeline( {count: 5, tweet_mode: 'extended',  } );
    if (data.truncated = true) {
        data.truncated = false
    }
    
    
    for (i=0; i < data.length; i++) {
        if (data[i].in_reply_to_status_id) {
            const original = await twitterClient.tweets.statusesShow( {id: data[i].in_reply_to_status_id_str} );
            data[i].original = original
            console.log(original)
        }
    }

    // console.log(data)
    res.json(data)
} catch (error) {
    console.error(error)
    res.status(500).json({error: "fail"})
}
})

module.exports = router;