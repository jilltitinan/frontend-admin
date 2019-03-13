import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
    data : {},
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case LOGIN:
            return { ...state, data: actions.payload };
        default:
            return state;
    }
}