import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer'
import postErrorsReducer from './post_errors_reducer'
import userErrorsReducer from './user_errors_reducer'
import commentErrorsReducer from './comment_errors_reducer'
import friendshipErrorsReducer from './friendship_errors_reducer'
import likeErrorsReducer from './like_errors_reducer'

export default combineReducers({
    session: sessionErrorsReducer,
    post: postErrorsReducer,
    user: userErrorsReducer,
    comment: commentErrorsReducer,
    friendship: friendshipErrorsReducer,
    like: likeErrorsReducer
})