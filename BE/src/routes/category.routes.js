const express = require('express');
const router = express.Router();
const {addCategory , getCategory} = require('../controllers/categories.controllers');


router.post('/category',addCategory);
router.get('/category',getCategory);

module.exports = router;