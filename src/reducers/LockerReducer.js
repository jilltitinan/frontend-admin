import { LOCKER } from '../actions/types';

const INITIAL_STATE = {
    mac_address : '',
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case LOCKER:
            return { ...state, mac_address: actions.payload };
        default:
            return state;
    }
}