import { REGISTER_USER,
        AUTH_LOADING,
        LOGIN_USER,
    SET_CURRENT_USER, 
    LOGOUT_USER} from './types';

import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const register_user =(user_data, history) => dispatch => {

    dispatch(set_auth_loading());

    axios.post('/api/register_user')
        .then(response => {
            history.push('/login');
        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const login_user =(user_data) => dispatch => {
    
    dispatch(set_auth_loading());

    axios.post('/api/login', user_data)
        .then(response => {

            const { token } =response.data;

            localStorage.setItem("jwt_token", token);

            const decoded =jwt_decode(token);

            dispatch(set_current_user(decoded));

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const logout =() => {
    localStorage.removeItem("jwt_token");
}

export const clear_current_user =() => {
    return {
        type: LOGOUT_USER
    }
}

export const set_current_user =(decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}


export const set_auth_loading =() => {
    return {
        type: AUTH_LOADING
    }
}