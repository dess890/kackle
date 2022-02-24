const passport = require('passport');
const express = require('express');
const router = express.Router();

const TwitterStrategy = require('passport-twitter').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: "http://localhost:3000/auth/twitter/callback",
},
function(accessToken, refreshToken, profile, done) { // create user in DB here
  return done(null, profile);
}
));

router.get('/auth/error', (req, res) => res.send('Unknown Error'))
router.get('/auth/twitter',passport.authenticate('twitter'));
router.get('/auth/twitter/callback',passport.authenticate('twitter', { failureRedirect: '/auth/error' }),
function(req, res) {
  res.redirect('/');
});

module.exports = router