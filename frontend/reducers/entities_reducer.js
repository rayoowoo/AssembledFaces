import { combineReducers } from 'redux';
import userReducer from './user_reducer';

export default combineReducers({
    users: userReducer
})