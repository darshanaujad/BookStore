const express = require('express');
const authMiddlewre = require('../middlewares/authMiddleware');
const router = express.Router();
const {loginUser , registerUser , getMe} = require('../controllers/auth.controllers');

router.post('/login',loginUser);
router.post('/signup',registerUser);
router.get('/me' , authMiddlewre , getMe);

module.exports = router;

