import { COMMENTS_LOADING, COMMENTS_LOADED, CREATE_COMMENT } from '../actions/types';

const initial_state ={
    comments: [],
    loading: false,
}

export default function(state =initial_state, action){
    switch(action.type){

        case COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            };

        case COMMENTS_LOADED:
            return {
                ...state,
                loading: false,
                comments: action.payload
            };

        case CREATE_COMMENT:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.payload]
            };

        default:
            return state;
    }
}