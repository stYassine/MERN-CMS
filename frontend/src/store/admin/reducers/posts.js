import { LOAD_POSTS, SELECT_POST, CREATE_POST, UPDATE_POST, REMOVE_POST } from '../actions/types';

const initial_state ={
    posts: [],
    selected_post: null
}

export default function(state =initial_state, action){
    switch(action.type){

        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload
            }


        case SELECT_POST:
            return {
                ...state,
                selected_post: action.payload
            }

        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((index, post) => post._id == action.payload._id ? post = action.payload : null)
            }

        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id != action.payload._id)
            }

        default:
            return state;
    }
}