const mongoose =require('mongoose');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const secret_jwt =require('../config').jwt_secret;

const user_schema =new mongoose.Schema({
    is_admin: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 99
    },
    token: {
        type: String
    }
}, {timestamps: true});


/// Hash Password
user_schema.pre('save', function(next){

    let user =this;

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, (err, hashed_password) => {
            if(err) return next(err);
            user.password =hashed_password;
            next();
        });
    });

});

/// Compare passwords
user_schema.methods.compare_password =function(received_password, cb){
    bcrypt.compare(received_password, this.password, (err, is_matched) => {
        if(err) return cb(err);
        cb(null, is_matched);
    });
}

/// Generate Token
user_schema.methods.generate_token =function(cb){

    let user =this;

    let token =jwt.sign({data: user}, secret_jwt);
    user.token =token;

    user.save((err, user) => {
        if(err) return cb(err);
        cb(null, user);
    });
    

}


/// Find User By Token
user_schema.statics.find_user_by_token =function(token, cb){

    const user =this;

    jwt.verify(token, secret_jwt, (err, decoded) => {
        if(err) return cb(err);
        User.find({'_id': decoded._id}, (err, user) => {
            if(err) return cb(err);
            cb(null, user);
        });
    });

}


const User =mongoose.model('User', user_schema);

module.exports =User;