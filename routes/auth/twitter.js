const passport = require('passport');
const express = require('express');
const db = require('../../models')
const router = express.Router();

const TwitterStrategy = require('passport-twitter').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});


passport.deserializeUser(function (userId, done) {
    db.User.findByPk(userId || userId.id)
        .then(user => {
            done(null, user);
        })

});
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://localhost:3000/auth/twitter/callback",
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

router.get('/auth/error', (req, res) => res.send('Unknown Error'))
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/auth/error' }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router