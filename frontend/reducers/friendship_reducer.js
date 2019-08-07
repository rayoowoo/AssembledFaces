import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions'
import {RECEIVE_USER} from '../actions/user_actions'
import {RECEIVE_CURRENT_USER, LOGOUT_USER} from '../actions/session_actions'
import {merge} from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDSHIP:
            return merge({}, state, action.res.friendship);
        case REMOVE_FRIENDSHIP:
            const newState = merge({}, state);
            const friendship = Object.values(action.res.friendship);
            delete newState[friendship[0].id];
            return newState;
        case RECEIVE_USER:
            return merge({}, action.res.friendships)
        case RECEIVE_CURRENT_USER:
            return merge({}, action.res.friendships)
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}