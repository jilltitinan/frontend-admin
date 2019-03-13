import { combineReducers } from 'redux';
import MemberReducer from './MemberReducer';
import LoginReducer from './LoginReducer';

export default combineReducers ({
    memberDetail : MemberReducer,
    loginDetail : LoginReducer
});