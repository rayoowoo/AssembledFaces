import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions'
import { RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions'
import { merge } from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    
    switch (action.type) {
        case RECEIVE_LIKE:
            return merge({}, state, action.res.like);
        case REMOVE_LIKE:
            newState = merge({}, state);
            delete newState[Object.values(action.res.like)[0].id];
            return newState;
        case RECEIVE_USER:
            return merge({}, action.res.likes)
        case RECEIVE_CURRENT_USER:
            return merge({}, action.res.likes)
        case RECEIVE_TIMELINE_POSTS:
            return merge({}, action.res.likes)
        case RECEIVE_ALL_POSTS:
            return merge({}, action.res.likes)
        case RECEIVE_POST:
            return merge({}, state, action.res.likes)
        case REMOVE_POST:
            const oldLikes = Object.keys(action.res.likes);
            newState = merge({}, state);
            oldLikes.forEach(like => {
                delete newState[like];
            })
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}
