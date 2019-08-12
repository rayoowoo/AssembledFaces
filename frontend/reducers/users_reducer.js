import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions'
import { RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions'
// import { RECEIVE_FRIENDSHIP } from '../actions/friendship_actions'
import { LOGOUT_USER } from '../actions/session_actions'


import {merge} from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);

    let newUser, friends;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            friends = merge({}, action.res.friends)
            return merge({}, state, action.res.user, friends);
        case RECEIVE_USER:
            newUser = merge({}, action.res.user)
            friends = merge({}, action.res.friends)
            return merge({}, state, newUser, friends);
        case RECEIVE_ALL_USERS:
            return merge({}, state, action.res.users);
        // case RECEIVE_FRIENDSHIP:
        //     return merge({}, state, action.res.requested, action.res.requester)
        case RECEIVE_TIMELINE_POSTS:
            return merge({}, state, action.res.authors)
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.res.authors)
        case RECEIVE_POST:
            return merge({}, state, action.res.author)
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
    
}