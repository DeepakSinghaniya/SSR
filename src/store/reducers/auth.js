import {FATCH_CURRENT_USER} from '../actionsTypes';

export default (state = null, action) => {
    switch(action.type) {
        case FATCH_CURRENT_USER:
        return action.payLoad.data || false;
        default:
        return state;
    }
}