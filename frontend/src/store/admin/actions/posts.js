import axios from 'axios';
import { CREATE_POST, UPDATE_POST, REMOVE_POST, LOAD_POSTS, SELECT_POST } from './types';

const API_URL ='http://localhost:8080';

export const load_posts =(post_data) => dispatch => {
    
    axios.get(`${API_URL}/posts`)
        .then(response => {
            
            dispatch({
                type: LOAD_POSTS,
                payload: response.data.posts
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const select_post =(post) => {
    return {
        type: SELECT_POST,
        payload: post
    };
}

export const create_post =(post_data) => dispatch => {

    axios.post(`${API_URL}/posts/create`, post_data)
        .then(response => {

            dispatch({
                type: CREATE_POST,
                payload: response.data.post
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const update_post =(post_data) => dispatch => {

    axios.post(`${API_URL}/posts/update`, post_data)
        .then(response => {

            dispatch({
                type: UPDATE_POST,
                payload: response.data.post
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const remove_post =(post_id) => dispatch => {

    axios.post(`${API_URL}/posts/remove/${post_id}`)
        .then(response => {

            dispatch({
                type: REMOVE_POST,
                payload: response.data.post
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}