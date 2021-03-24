const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv/config');

router.post('/', async (req, res) => {
    const token = jwt.sign({_id: req.body.userId}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;
