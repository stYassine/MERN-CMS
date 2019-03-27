import { LOAD_USERS, SELECT_USER, CREATE_USER, UPDATE_USER, REMOVE_USER } from '../actions/types';

const initial_state ={
    users: [],
    selected_user: {}
}

export default function(state =initial_state, action){
    switch(action.type){

        case LOAD_USERS:
            return {
                ...state,
                users: action.payload
            }

        case SELECT_USER:
            return {
                ...state,
                selected_user: action.payload
            }

        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((index, user) => user._id == action.payload._id ? user = action.payload : null)
            }

        case REMOVE_USER:
            return {
                ...state,
                users: state.user.filter((user) => user._id != action.payload._id)
            }

        default:
            return state;
    }
}