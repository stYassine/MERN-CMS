import axios from 'axios';
import { LOAD_COMMENTS, CREATE_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from './types';

const API_URL ='http://localhost:8080';

export const load_comments =(comment_data) => dispatch => {

    axios.get(`${API_URL}/comments`)
        .then(response => {

            dispatch({
                type: LOAD_COMMENTS,
                payload: response.data.comments
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}


export const create_comment =(comment_data) => dispatch => {

    axios.post(`${API_URL}/comments/create`, comment_data)
        .then(response => {

            dispatch({
                type: CREATE_COMMENT,
                payload: response.data.comment
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const update_comment =(comment_data) => dispatch => {

    axios.post(`${API_URL}/comments/update`, comment_data)
        .then(response => {

            dispatch({
                type: UPDATE_COMMENT,
                payload: response.data.comment
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const remove_comment =(comment_id) => dispatch => {

    axios.post(`${API_URL}/comments/remove/${comment_id}`)
        .then(response => {

            dispatch({
                type: REMOVE_COMMENT,
                payload: response.data.comment
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}