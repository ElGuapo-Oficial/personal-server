"use strict";
const router = require('express').Router();
const { getInfo } = require('../controllers/index');
router.get('/info', getInfo);
module.exports = router;
