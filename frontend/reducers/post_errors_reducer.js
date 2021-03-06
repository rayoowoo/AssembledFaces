import { RECEIVE_POST_ERRORS, CLEAR_POST_ERRORS, REMOVE_POST, RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST} from '../actions/post_actions'
import { LOGOUT_USER } from '../actions/session_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return Object.values({errors: `PostError: ${action.errors.statusText}`})
        case RECEIVE_TIMELINE_POSTS:
            return [];
        case RECEIVE_ALL_POSTS:
            return [];
        case RECEIVE_POST:
            return [];
        case REMOVE_POST:
            return [];
        case CLEAR_POST_ERRORS:
            return [];
        case LOGOUT_USER:
            return [];
        default:
            return state;;
    }
}