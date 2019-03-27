import { POSTS_LOADNIG, POSTS_LOADED, SET_POPULAR_POSTS, SET_RECENT_POSTS } from './types';
import axios from 'axios';

const API_URL ="http://localhost:8080";

export const load_posts =() => dispatch => {

    dispatch(set_posts_loading());

    axios.get(`${API_URL}/posts`)
        .then(response => {
            ///console.log('HONA : ',response.data.posts);

            dispatch({
                type: POSTS_LOADED,
                payload: response.data.posts
            });

            dispatch({
                type: SET_POPULAR_POSTS,
                payload: response.data.popular_posts
            });

            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.recent_posts
            });


        })
        .catch(err => {
            console.log(err);
        });
}


export const set_posts_loading =() => {
    return {
        type: POSTS_LOADNIG
    }
}