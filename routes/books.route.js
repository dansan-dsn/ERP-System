const express = require('express');
const { addBooks, deleteBooks, updateBooks, getBooks } = require('../controllers/books.controller');
const router = express.Router()

router.post('/', addBooks);
router.get('/', getBooks);
router.post('/update', updateBooks);
router.post('/delete', deleteBooks);

module.exports = router