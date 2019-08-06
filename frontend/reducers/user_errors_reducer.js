import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS, RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return Object.values({ errors: `UserError: ${action.errors.statusText}` })
        case RECEIVE_ALL_USERS:
            return [];
        case RECEIVE_USER:
            return [];
        case CLEAR_USER_ERRORS:
            return [];
        default:
            return state;;
    }
}