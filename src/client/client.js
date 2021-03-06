import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Loadable from 'react-loadable';

import routes from '../routes/routes';
import reducer from '../store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const axiosInstance = axios.create({
    baseURL: '/api'
});
const store = createStore(reducer, window.INITIAL_STATE, composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))));

Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
        , document.querySelector('#root'));
});