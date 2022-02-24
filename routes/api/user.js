const express = require('express');
const db = require('../../models');
const router = express.Router();
const bcrypt = require('bcrypt')

// POST /users/register
router.post('/register', function (req, res, next) {
    // TODO: check for required fields
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

// POST /users/login
router.post('/login', (req, res) => {
    //check for required fields
    if (!req.body.username || !req.body.password) {
        res.status(400).json({
            error: 'please include all required fields'
        })
        return
    }
    //check for user in database
    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        // if there is no existing user
        if (!user) {
            //send error
            res.status(404).json({ error: 'no user with that username found' })
            return
        }
        // check the password against the hash
        bcrypt.compare(req.body.password, user.password)
            .then(match => {
                if (!match) {
                    res.status(401).json({ error: 'incorrect password' })
                    return
                }
                //set the user on the session
                req.session.user = user
                res.json(user)
            })
    })
})

// GET /users/logout
router.get('/logout', (req, res) => {
    req.session.user = null;
    res.status(200).json({
        success: 'user logged out'
    })
})

module.exports = router;
