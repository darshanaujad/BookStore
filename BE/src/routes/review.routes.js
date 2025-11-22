const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const {addReview} = require('../controllers/review.controllers');


router.post('/review/:id' , addReview);


module.exports = router;