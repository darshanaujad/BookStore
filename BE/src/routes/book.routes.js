const express = require('express');
const router = express.Router();

const {addBook , getBook , getBookById , deleteBookById} = require('../controllers/book.controllers');

router.post('/book', addBook);
router.get('/book' , getBook);
router.get('/book/:id' , getBookById);
router.delete('/book/:id' , deleteBookById);

module.exports = router;