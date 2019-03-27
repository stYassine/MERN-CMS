import { LOAD_COMMENTS, SELECT_COMMENT, CREATE_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT } from '../actions/types';

const initial_state ={
    comments: [],
    selected_comment: null
}

export default function(state =initial_state, action){
    switch(action.type){

        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }

        case SELECT_COMMENT:
            return {
                ...state,
                selected_comment: action.payload
            }

        case CREATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }

        case UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map((index, comment) => comment._id == action.payload._id ? comment = action.payload : null)
            }

        case REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((comment) => comment._id != action.payload._id)
            }

        default:
            return state;
    }
}