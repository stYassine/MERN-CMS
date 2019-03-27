import axios from 'axios';
import { LOAD_USERS, CREATE_USER, SELECT_USER, UPDATE_USER, REMOVE_USER } from './types';

const API_URL ='http://localhost:8080';

export const load_users =() => dispatch => {

    axios.get(`${API_URL}/users`)
        .then(response => {
            
            dispatch({
                type: LOAD_USERS,
                payload: response.data.users
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}


export const create_user =(user_data) => dispatch => {

    axios.post(`${API_URL}/users/register`, user_data)
        .then(response => {

            dispatch({
                type: CREATE_USER,
                payload: response.data.user
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const select_user =(user_data) => {
    return {
        type: SELECT_USER,
        payload: user_data
    }
}

export const update_user =(user_data) => dispatch => {

    axios.post(`${API_URL}/users/update`, user_data)
        .then(response => {

            dispatch({
                type: UPDATE_USER,
                payload: response.data.user
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}

export const remove_user =(user_id) => dispatch => {

    axios.post(`${API_URL}/users/remove/${user_id}`)
        .then(response => {

            dispatch({
                type: REMOVE_USER,
                payload: response.data.user
            });

        })
        .catch(err => {
            console.log(Error(err));
        });

}