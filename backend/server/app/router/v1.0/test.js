const express = require('express');
const test = require('~server/app/controller/test')
const router = express.Router();

router.get('/test', test)

module.exports = router;
