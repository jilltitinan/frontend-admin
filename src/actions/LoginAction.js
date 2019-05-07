import { LOGIN } from './types';

export const login = (result) => {

    // console.log('login redux ' + result);

    return {
        type: LOGIN,
        payload: result,
    }
}
