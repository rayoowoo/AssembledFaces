import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import postReducer from './posts_reducer';

export default combineReducers({
    users: userReducer,
    posts: postReducer
})