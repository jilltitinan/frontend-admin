import { combineReducers } from 'redux';
import MemberReducer from './MemberReducer';

export default combineReducers ({
    memberDetail : MemberReducer,
});