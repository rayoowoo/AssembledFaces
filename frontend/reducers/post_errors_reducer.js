import { RECEIVE_POST_ERRORS, CLEAR_POST_ERRORS, RECEIVE_TIMELINE_POSTS, RECEIVE_ALL_POSTS, RECEIVE_POST} from '../actions/post_actions'

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
        case CLEAR_POST_ERRORS:
            return [];
        default:
            return state;;
    }
}