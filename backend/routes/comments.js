const express = require('express');
const router = express.Router();
const comments_controller =require('../controllers/comments');

router.get('post/:id/comments', comments_controller.get_post_comments);

router.post('post/:id/comment', comments_controller.create_comment);

router.post('/comments/remove/:id', comments_controller.remove_comment);

module.exports =router;