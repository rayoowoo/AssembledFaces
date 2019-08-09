import { RECEIVE_LIKE_ERRORS, CLEAR_LIKE_ERRORS } from '../actions/like_actions'
import { LOGOUT_USER } from '../actions/session_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKE_ERRORS:
            return Object.values({ errors: `PostError: ${action.errors.statusText}` })
        case CLEAR_LIKE_ERRORS:
            return [];
        case LOGOUT_USER:
            return [];
        default:
            return state;
    }
}