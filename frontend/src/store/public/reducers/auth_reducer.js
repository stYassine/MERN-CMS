import {
    REGISTER_USER,
    AUTH_LOADING,
    LOGIN_USER,
    SET_CURRENT_USER,
    LOGOUT_USER
} from '../actions/types';

const initial_state ={
    user: {},
    loading: false,
    is_authenticated: false
}


export default function(state =initial_state, action){
    switch(action.type){

        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }

        case LOGIN_USER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }

        case LOGOUT_USER: 
            return {
                ...state,
                is_authenticated: false,
                user: {},
                loading: false
            }

        default:
            return state;
    }
}