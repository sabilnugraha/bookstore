const express = require('express');
const { register, login } = require('../controllers/auth');
const { storeBook, getAllBooks } = require('../controllers/product');
const { uploadFile } = require('../middlewares/uploadFile');

const router = express.Router()


router.post("/register", register);
router.post("/login", login);
router.post('/book', uploadFile('thumbnail','bookFile'),  storeBook);
router.get('/books', getAllBooks);

module.exports = router