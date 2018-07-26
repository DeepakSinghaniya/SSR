import { FATCH_USERS, FATCH_CURRENT_USER } from '../actionsTypes';

export const getUsers = (data) => {
    return {
        type: FATCH_USERS,
        payLoad: data
    }
}
export const fatchUsers = () => {
    return async (dispatch, getStore, api) => {
        const res = await api.get('/users');
        dispatch(getUsers(res));
    };
}


export const getCurrentUser = (data) => {
    return {
        type: FATCH_CURRENT_USER,
        payLoad: data
    };
}


export const fatchCurrentUser = () => {
    return async (dispatch, getStore, api) => {
        const res = await api.get('/current_user');
        getCurrentUser(res);
    };
}