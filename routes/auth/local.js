const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../../models');
const router = express.Router();
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.User.findOne({
        where: {
            username: username
        }
    })
        .then(user => {
            if (!user) {
                return cb(null, false, { message: 'Username not found' })
            }
            bcrypt.compare(password, user.password)
                .then(match => {
                    if (!match) {
                        return cb(null, false, { message: 'Incorrect password.' });
                    }
                    //set the user on the session
                    return cb(null, user);
                })
        })
}));

// POST /users/register
router.post('/register', function (req, res, next) {
    // check for required fields
    if (!req.body.username || !req.body.password) {
        res.status(400).json({
            error: 'please include all required fields'
        })
        return
    }
    db.User.findAll({
        where: {
            username: req.body.username
        }
    }).then(users => {
        // if there is an existing user
        if (users.length) {
            // send error response
            res.status(400).json({
                error: 'username already exists'
            })
        }
        else {
            // hash password
            bcrypt.hash(req.body.password, 10).then(hash => {
                db.User.create({
                    username: req.body.username,
                    password: hash
                })
                    .then(user => {
                        res.status(200).json(user)
                    })
            })
        }
    })
});

// POST local user login
router.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/auth/error',
    failureMessage: true
}));

module.exports = router;
