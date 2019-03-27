const mongoose =require('mongoose');

const comment_schema =new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String,
        min: 1,
        maxlength: 10000
    }
}, {timestamps: true});

const Comment =mongoose.model('Comment', comment_schema);

module.exports =Comment;