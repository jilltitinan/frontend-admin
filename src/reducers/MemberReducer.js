import { MEMBER } from '../actions/types';

const INITIAL_STATE = {
    member : ' ',
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case MEMBER:
            return { ...state, member: actions.payload };
        default:
            return state;
    }
}