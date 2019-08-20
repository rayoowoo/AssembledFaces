import { RECEIVE_TAG, REMOVE_TAG } from '../actions/tag_actions'
import { LOGOUT_USER } from '../actions/session_actions'
import { RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions'
import { merge } from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_TAG:
            return merge({}, state, action.res.tag);
        case REMOVE_TAG:
            newState = merge({}, state);
            delete newState[Object.values(action.res.tag)[0].id];
            return newState;
        case RECEIVE_TIMELINE_POSTS:
            return merge({}, action.res.tags)
        case RECEIVE_ALL_POSTS:
            return merge({}, action.res.tags)
        case RECEIVE_POST:
            return merge({}, state, action.res.tags)
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}
