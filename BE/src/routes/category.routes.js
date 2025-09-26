const express = require('express');
const router = express.Router();
const {addCategory} = require('../controllers/categories.controllers');

router.post('/category',addCategory);

module.exports = router;