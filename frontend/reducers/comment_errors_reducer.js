import { RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS, REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions'
import { LOGOUT_USER } from '../actions/session_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return Object.values({ errors: `CommentError: ${action.errors.statusText}` })
        case RECEIVE_COMMENT:
            return [];
        case REMOVE_COMMENT:
            return [];
        case CLEAR_COMMENT_ERRORS:
            return [];
        case LOGOUT_USER:
            return [];
        default:
            return state;;
    }
}