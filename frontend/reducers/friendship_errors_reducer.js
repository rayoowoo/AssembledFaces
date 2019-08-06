import {RECEIVE_FRIENDSHIP_ERRORS, CLEAR_FRIENDSHIP_ERRORS} from '../actions/friendship_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDSHIP_ERRORS:
            return Object.values({ errors: `PostError: ${action.errors.statusText}` })
        case CLEAR_FRIENDSHIP_ERRORS:
            return [];
        default:
            return state;
    }
}