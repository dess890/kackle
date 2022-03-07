const FB = require("fb")
const isLoggedIn = require('../../Middleware/auth')
var express = require('express');
var router = express.Router();

router.get("/", isLoggedIn, function (req, res) {
    FB.setAccessToken(req.user.facebookAuth.accessToken)
    FB.api("/me", (data) => {
        res.json(data)
    })
})


router.get("/feed", isLoggedIn, function (req, res) {
    FB.setAccessToken(req.user.facebookAuth.accessToken)
    FB.api('/me/feed', (data) => {
        res.json(data)
    })
})

module.exports = router;