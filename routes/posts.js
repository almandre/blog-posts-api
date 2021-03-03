const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

router.post('/', postsController.create);
router.get('/', postsController.find);
router.get('/:id', postsController.findById);

module.exports = router;
