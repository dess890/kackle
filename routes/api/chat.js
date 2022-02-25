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
        .then(conversation => {
            res.status(202).json(conversation)
        })

});

router.get('/getMessages/:userId', async function (req, res, next) {
    const fromUser = await db.Chat.findAll({
        where: { fromUserId: req.params.userId },
    })
    if(!fromUser){
        //handle missing and success
        if (!chatLog) {
            res.status(404).json({ error: 'could not find user with that id' });
            return
        }
    }
})

module.exports = router;
