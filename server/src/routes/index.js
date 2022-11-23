const express = require('express');
const { register, login } = require('../controllers/auth');
const { addCategory } = require('../controllers/category');
const { storeBook, getAllBooks, getProduct } = require('../controllers/product');
const { uploadFile } = require('../middlewares/uploadFile');

const router = express.Router()


router.post("/register", register);
router.post("/login", login);
router.post('/book', uploadFile('thumbnail','bookFile'),  storeBook);
router.get('/books', getAllBooks);
router.get('/book/:id', getProduct);

router.post("/category", addCategory);

module.exports = router