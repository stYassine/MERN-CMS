const express =require('express');
const router = express.Router();
const posts_controller =require('../controllers/posts');


/// All Posts
router.get('/', posts_controller.get_all_posts);

/// Get Single Post By Id
router.get('/id', posts_controller.get_single_post);

/// Create Post
router.post('/create', posts_controller.create_post);

/// Update Post
router.post('/update/:id', posts_controller.update_post);

/// Remove Post
router.post('/remove/:id', posts_controller.remove_post);

module.exports =router;