const express = require('express');
const router = express.Router();
const dogsCtrl = require('../controllers/dogs');

router.get('/', dogsCtrl.index);
router.get('/:id', dogsCtrl.show);


module.exports = router; 