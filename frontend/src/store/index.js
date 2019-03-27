import { createStore, applyMiddleware, compose } from 'redux';
import root_reducer from './combined_reducer';
import thunk from 'redux-thunk';

const middleware =[thunk];

const initial_state ={};

const store =createStore(root_reducer, initial_state, compose(applyMiddleware(...middleware)));

export default store;