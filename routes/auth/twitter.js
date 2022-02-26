const passport = require('passport');
const express = require('express');
const db = require('../../models')
const router = express.Router();

const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL:  (process.env.APP_URL || 'http://localhost:3000') + "/auth/twitter/callback",
},
    function (accessToken, refreshToken, profile, done) {
        db.User.findOrCreate({
            where: {
                twitterId: profile.id
            },
            defaults: {
                twitterId: profile.id,
                username: profile.username,
                twitterAuth: {
                    accessToken,
                    refreshToken,
                    profile
                }
            }
        })
            .then(async ([user, created]) => {
                if (!created) {
                        user.twitterAuth = {
                            accessToken,
                            refreshToken,
                            profile
                        }
                        await user.save()
                }

                return done(null, user);
            })
    }
));


router.get('/', passport.authenticate('twitter'));
router.get('/callback', passport.authenticate('twitter', { failureRedirect: '/auth/error' }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router