const express = require('express');
const router = express.Router();
const catsCtrl = require('../Controllers/cats');


//Our routes dedicated to cats request
router.get('/', catsCtrl.index);


module.exports = router; 

