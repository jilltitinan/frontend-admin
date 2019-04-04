import { combineReducers } from 'redux';
import MemberReducer from './MemberReducer';
import LoginReducer from './LoginReducer';
import LockerReducer from './LockerReducer';

export default combineReducers ({
    memberDetail : MemberReducer,
    login : LoginReducer,
    locker : LockerReducer,
});