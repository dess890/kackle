const express = require('express');
const db = require('../../models')
const router = express.Router();
const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});


passport.deserializeUser(function (userId, done) {
    db.User.findByPk(userId || userId.id)
        .then(user => {
            done(null, user);
        })

});
passport.use(new FacebookStrategy({
    clientID: process.env['FACEBOOK_APP_ID'],
    clientSecret: process.env['FACEBOOK_APP_SECRET'],
    callbackURL: (process.env.APP_URL || 'http://localhost:3000') + '/auth/facebook/callback'
},
    function (accessToken, refreshToken, profile, done) {
        db.User.findOrCreate({
            where: {
                facebookId: profile.id
            },
            defaults: {
                facebookId: profile.id,
                username: profile.displayName,
                facebookAuth: {
                    accessToken,
                    refreshToken,
                    profile
                }
            }
        })
            .then(async ([user, created]) => {
                if (!created) {
                    user.facebookAuth = {
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
/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.send('testing');
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router;
