const passport = require('passport');
const express = require('express');
const db = require('../../models')
const router = express.Router();

const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    passReqToCallback: true,
    callbackURL: (process.env.APP_URL || 'http://localhost:3000') + "/auth/twitter/callback",
},
    async function (req, accessToken, refreshToken, profile, done) {
        // check user exists
        if (!req.user) {
            return done(new Error("Please log in"));
        }
        req.user.twitterId = profile.id
        req.user.twitterAuth = {
            accessToken,
            refreshToken,
            profile
        }
        await req.user.save()
        return done(null, req.user);
    })
);


router.get('/', passport.authenticate('twitter'))
router.get('/callback', passport.authenticate('twitter', { failureRedirect: '/auth/error' }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router