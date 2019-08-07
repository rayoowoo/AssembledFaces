import {RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/post_actions'
import { RECEIVE_USER, RECEIVE_ALL_USERS} from '../actions/user_actions'
import { LOGOUT_USER } from '../actions/session_actions'

import {merge} from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TIMELINE_POSTS:
            return merge({}, action.res.posts);
        case RECEIVE_ALL_POSTS:
            return merge({}, action.res.posts);
        case RECEIVE_POST:
            return merge({},state, action.res.post)
        case REMOVE_POST:
            const newState = merge({}, state);
            delete newState[Object.values(action.res.post)[0].id]
            return newState;
        case RECEIVE_USER:
            return merge({}, state, action.res.posts);   
        case LOGOUT_USER:
            return {};         
        default:
            return state;
    }
}
