import {FATCH_USERS} from '../actionsTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case FATCH_USERS:
        return action.payLoad.data;
        default:
        return state;
    }
}