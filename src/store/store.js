import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/home-reducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


export default rootStore;