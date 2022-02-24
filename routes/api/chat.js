const express = require('express');
const db = require('../../models');
const router = express.Router();
const bcrypt = require('bcrypt')

// POST /users/register
router.post('/sendMessage', function (req, res, next) {
    // TODO: check for required fields
    if (!req.body.fromUserId || !req.body.toUserId || !req.body.content) {
        res.status(400).json({
            error: 'please include all required fields (fromUser, toUser, content)'
        })
        return
    }

    db.Chat.create({
        fromUserId: req.body.fromUserId,
        toUserId: req.body.toUserId,
        content: req.body.content,
        isRead: false,
    })
    .then(newMessage => {
        res.status(200).json(newMessage)
    })
});

router.get('/getMessages/:userId', function (req, res, next) {
    
})

module.exports = router;
