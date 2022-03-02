// Default Template Code >>

var express = require('express');
var router = express.Router();

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})


module.exports = router;