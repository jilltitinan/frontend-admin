import { MEMBER } from './types';

export const member = (result) => {

    // console.log('reduxxxxxxxxxxx ' + result);

    return {
        type: MEMBER,
        payload: result,
    }
}
