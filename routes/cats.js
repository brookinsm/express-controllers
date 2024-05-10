const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');


//Our routes dedicated to cats request
router.get('/', catsCtrl.index);
router.get('/:id', catsCtrl.show);


module.exports = router; 

