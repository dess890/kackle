var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.send('testing');
});

router.get('/login/facebook', passport.authenticate('facebook'));

app.get('/oauth2/redirect/facebook',
    passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router;
