const express = require('express');
const router = express.Router();

router.get('/current', (req, res) => {
    if(!req.user){
        res.status(200).json({user: null})
        return
    }
    res.status(200).json(req.user)
})

module.exports = router;
