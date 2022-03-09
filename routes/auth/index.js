const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../../models');
const router = express.Router();


passport.serializeUser(function (user, done) {
    console.log("USER ID AT SERIALIZE: ", user)
    done(null, user.id);
});

passport.deserializeUser(function (userId, done) {
    console.log("USER ID AT DESERIALIZE: ", userId)
    db.User.findByPk(userId || userId.id)
        .then(user => {
            done(null, user);
        })

});

router.post('/logout', function (req, res, next) {
    
    req.logout();
    res.redirect('/');
});

router.get('/error', (req, res) => {
    const error = req.session.messages?.[req.session.messages?.length-1]
    req.session.messages = null
    res.json({error: error || "unknown error"})
})

module.exports = router