const express = require('express');
const db = require('../../models')
const router = express.Router();
const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: process.env['FACEBOOK_APP_ID'],
    clientSecret: process.env['FACEBOOK_APP_SECRET'],
    passReqToCallback: true,
    callbackURL: (process.env.APP_URL || 'http://localhost:3000') + '/auth/facebook/callback'
},
    async function (req, accessToken, refreshToken, profile, done) {
        if (!req.user) {
            return done(new Error("Please log in"));
        }
        req.user.facebookId = profile.id
        req.user.facebookAuth = {
            accessToken,
            refreshToken,
            profile
        }
        await req.user.save()
        return done(null, req.user);
    }
));

router.get('/', passport.authenticate('facebook', {
    authType: 'reauthenticate',
    scope: [
        'user_posts', 'user_photos', 'public_profile'
    ]
}));
router.get('/callback',
    passport.authenticate('facebook', { failureRedirect: '/auth/error', failureMessage: true }),
    function (req, res) {
        res.redirect('/');
    });


module.exports = router;
