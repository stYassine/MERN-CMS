import { combineReducers } from 'redux';
/// Public Reducers
import auth_reducer from './public/reducers/auth_reducer';
import posts_reducer from './public/reducers/posts_reducer';
import comments_reducer from './public/reducers/comments_reducer';

/// Admin Reducers
import admin_users_reducer from './admin/reducers/users';
import admin_posts_reducer from './admin/reducers/posts';
import admin_comments_reducer from './admin/reducers/comments';

export default combineReducers({
    auth: auth_reducer,
    posts: posts_reducer,
    comments: comments_reducer,
    admin_users: admin_users_reducer,
    admin_posts: admin_posts_reducer,
    admin_comments: admin_comments_reducer
});