import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions'
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {merge} from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDSHIP:
            return merge({}, state, action.friendship);
        case REMOVE_FRIENDSHIP:
            return {};
        case RECEIVE_USER:
            return merge({}, state, action.res.friendships)
        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.res.friendships)
        default:
            return state;
    }
}