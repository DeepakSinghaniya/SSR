import {FATCH_USERS} from '../actionsTypes';

export const getUsers = (data) => {
    return {
        type: FATCH_USERS,
        payLoad: data
    }
}
export const fatchUsers = () => {
    return async (dispatch, getStore, api) => {
        const res =  await api.get('/users');
        dispatch(getUsers(res));
    }
}