import { RECEIVE_TAG_ERRORS, CLEAR_TAG_ERRORS } from '../actions/tag_actions'
import { LOGOUT_USER } from '../actions/session_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TAG_ERRORS:
            return Object.values({ errors: `TagError: ${action.errors.statusText}` })
        case CLEAR_TAG_ERRORS:
            return [];
        case LOGOUT_USER:
            return [];
        default:
            return state;
    }
}