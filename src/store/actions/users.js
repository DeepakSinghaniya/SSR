import {FATCH_USERS} from '../actionsTypes';
import axios from 'axios';


export const getUsers = (data) => {
    return {
        type: FATCH_USERS,
        payLoad: data
    }
}
export const fatchUsers = () => {
    return async (dispatch, getStore) => {
        const res =  await axios.get('https://react-ssr-api.herokuapp.com/users');
        dispatch(getUsers(res));
    }
}