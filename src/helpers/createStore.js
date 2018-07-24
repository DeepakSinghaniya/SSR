import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../store/reducers';

const createReduxStore = () => {
    const store = createStore(reducer, {}, applyMiddleware(thunk));
    return store;
}

export default createReduxStore;