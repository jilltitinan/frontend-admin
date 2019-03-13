import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
    login : ' ',
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case LOGIN:
            return { ...state, login: actions.payload };
        default:
            return state;
    }
}