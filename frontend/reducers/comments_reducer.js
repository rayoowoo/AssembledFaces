import { RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'
import {merge} from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
    case RECEIVE_TIMELINE_POSTS:
        return merge({}, state, action.res.comments)
    case RECEIVE_ALL_POSTS:
        return merge({}, state, action.res.comments)
    case RECEIVE_POST:
        return merge({}, state, action.res.comments)
    case REMOVE_POST:
        newState = merge({},state);
        Object.keys(action.res.comments).forEach (key => {
            delete newState[key];
        })
        return newState;
    case RECEIVE_USER:
        return merge({}, state, action.res.comments)
    case RECEIVE_COMMENT:
        return merge({}, state, action.comment)
    case REMOVE_COMMENT:
        newState = merge({}, state);
        delete newState[Object.keys(action.res)]
        return newState;
    default:
        return state;
    }
}
