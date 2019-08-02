import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS, RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return Object.values(action.errors.responseJSON)
        case RECEIVE_ALL_USERS, RECEIVE_USER, CLEAR_USER_ERRORS:
            return [];
        default:
            return state;;
    }
}