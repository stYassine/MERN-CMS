import { POSTS_LOADNIG, POSTS_LOADED, 
    SET_POPULAR_POSTS,
    SET_RECENT_POSTS } from '../actions/types';

const initial_state ={
    posts: [],
    popular_posts: [],
    recent_posts: [],
    loading: false
}

export default function(state =initial_state, action){
    switch(action.type){

        case POSTS_LOADNIG:
            return {
                ...state,
                loading: true
            };

        case POSTS_LOADED:
        return {
            ...state,
            loading: false,
            posts: action.payload
        };

        case SET_POPULAR_POSTS:
            return {
                ...state,
                popular_posts: action.payload
            };

            case SET_RECENT_POSTS:
            return {
                ...state,
                recent_posts: action.payload
            };

        default:
            return state;
    }
}