import {RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/post_actions'
import {merge} from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TIMELINE_POSTS:
            debugger
            return merge({}, action.res.posts);
        case RECEIVE_ALL_POSTS:
            return merge({}, action.res.posts);
        case RECEIVE_POST:
            debugger
            return merge({},state, action.res.post)
        case REMOVE_POST:
            const newState = merge({}, state);
            delete newState[action.post.id]
            return newState;
        default:
            return state;
    }
}
