const express = require('express');

const router = express.Router();

router.use('/', require('./test'));

module.exports = (app) => { app.use(router); };
