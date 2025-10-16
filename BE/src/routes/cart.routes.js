const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {getCart , addToCart , removeItems , removeProduct} = require('../controllers/cart.controllers');



module.exports = router ;