import {combineReducers} from 'redux';
import usersReducer from './users';
import authReducer from './auth';

const reducer = combineReducers({
    users: usersReducer,
    auth: authReducer
}); 

export default reducer;