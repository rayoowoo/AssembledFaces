import { combineReducers } from 'redux';
import userReducer from './users_reducer';
import postReducer from './posts_reducer';
import commentReducer from './comments_reducer'
import friendshipReducer from './friendship_reducer'
import likeReducer from './likes_reducer'
import tagReducer from './tags_reducer'

export default combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
    friendships: friendshipReducer,
    likes: likeReducer,
    tags: tagReducer
})