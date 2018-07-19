import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './assets/scss/bootstrap/bootstrap.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderIt = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>;

ReactDOM.render(renderIt, document.getElementById('root'));
registerServiceWorker();
