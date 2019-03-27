import { COMMENTS_LOADING, COMMENTS_LOADED, CREATE_COMMENT } from './types';
import axios from 'axios';

export const load_comments =(post_id) => dispatch => {

    dispatch(set_comments_loading());

    axios.post(`/api/post_comments/${post_id}`)
        .then(response => {

            dispatch({
                type: COMMENTS_LOADED,
                payload: response.data.comments
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}


export const create_comment =(comment) => dispatch => {

    dispatch(set_comments_loading());

    axios.post('/api/create_comment', comment)
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

export const set_comments_loading =() => {
    return {
        type: COMMENTS_LOADING
    }
}