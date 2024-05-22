const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/posts', authMiddleware, postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', authMiddleware, postController.updatePost);
router.delete('/posts/:id', authMiddleware, postController.deletePost);


module.exports = router;
