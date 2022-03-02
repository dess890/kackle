const express = require('express');
const db = require('../../models');
const router = express.Router();
const bcrypt = require('bcrypt')
const { Op } = require("sequelize");

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
        //session id instead req.body
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
    // getting chat with fromUserId column equaling params userId
    const participant = await db.User.findByPk(req.params.userId)
    if (!participant) {
        //handle missing and success
        res.status(404).json({ error: 'could not find user with that id' });
        return
    }
    if (!req.user) {
        res.status(400).json({ error: 'must be logged in to get messages' })
        return
    }
    const loggedInUser = req.user.id
    console.log("CURRENT USER: ",loggedInUser)
    const messages = await db.Chat.findAll({
        where: {
            [Op.or]: [
                {
                    fromUserId: participant.id,
                    toUserId: loggedInUser
                },
                {
                    fromUserId: loggedInUser,
                    toUserId: participant.id
                }
            ]
        },
    })
    res.status(200).json(messages)
})

module.exports = router;
