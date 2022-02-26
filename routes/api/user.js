const express = require('express');
const db = require('../../models');
const router = express.Router();
const bcrypt = require('bcrypt')

router.get('/current', (req, res) => {
    res.json(req.user)
})

module.exports = router;
