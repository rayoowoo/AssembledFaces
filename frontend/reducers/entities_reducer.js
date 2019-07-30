import { combineReducers } from 'redux';
import userReducer from './users_reducer';

export default combineReducers({
    users: userReducer
})