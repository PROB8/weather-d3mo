import {createStore, applyMiddleware, compose, } from 'redux'; 
import thunk from 'redux-thunk';
import reducer from './reducer/index';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk))
);

export default store

