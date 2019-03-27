const express = require('express');
const router = express.Router();
const users_controller =require('../controllers/users');

/// Get all users
router.get('/', users_controller.get_all_users);

/// Get User By Token
router.post('/by_token', users_controller.get_user_by_token);

/// Register
router.post('/register', users_controller.register_user);

/// Login
router.post('/login', users_controller.login_user);

/// Remove User
router.post('/remove_user', users_controller.remove_user);

/// Update User Info
router.post('/update_user_info', users_controller.update_user_info);

module.exports =router;