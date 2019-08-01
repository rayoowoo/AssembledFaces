import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.values(action.errors.responseJSON)
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;;
    }
}