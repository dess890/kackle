const express = require('express');
const router = express.Router();

router.get('/current', (req, res) => {
    if(!req.user){
        res.status(400).json({error: "user not logged in"})
        return
    }
    res.status(200).json(req.user)
})

module.exports = router;
