const express = require('express');
const router = express.Router();
const {authmiddleware} = require('../middlewares/authMiddleware');
const { addBook, getBookById, getAllBooks, deleteBookById} = require('../controllers/book.controllers');

router.post('/book', addBook);
router.get('/books', getAllBooks);
router.get('/book/:id', getBookById);
router.delete('/book/:id', deleteBookById);



module.exports = router;
