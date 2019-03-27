const mongoose =require('mongoose');

const post_schema =new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String,
        minlength: 3,
        maxlength: 99,
        required: true
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 9999,
        required: true
    },
},{timestamps: true});

const Post =mongoose.model('post', post_schema);

module.exports =Post;