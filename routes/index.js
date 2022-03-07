// Default Template Code >>

const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})


module.exports = router;