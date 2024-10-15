const express = require('express');
const router = express.Router();
const photographyController = require('../controllers/photographyController');

router.get('/', photographyController.index);
router.get('/contact', photographyController.contact);
router.get('/book', photographyController.book);

module.exports = router;
