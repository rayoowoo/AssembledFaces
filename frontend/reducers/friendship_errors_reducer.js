import {RECEIVE_FRIENDSHIP_ERRORS, CLEAR_FRIENDSHIP_ERRORS} from '../actions/friendship_actions'
import { LOGOUT_USER } from '../actions/session_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDSHIP_ERRORS:
            return Object.values({ errors: `PostError: ${action.errors.statusText}` })
        case CLEAR_FRIENDSHIP_ERRORS:
            return [];
        case LOGOUT_USER:
            return [];
        default:
            return state;
    }
}