import { LOCKER } from './types';

export const locker = (mac_address) => {

    console.log('locker fdfdfa redux ' + mac_address);

    return {
        type: LOCKER,
        payload: mac_address,
    }
}
