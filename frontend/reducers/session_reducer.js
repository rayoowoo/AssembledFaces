import { RECEIVE_CURRENT_USER,
         LOGOUT_USER} 
         from '../actions/session_actions'

const _default = {
    id: null
}

export default (state = _default, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newState = Object.assign({}, { id: Object.values(action.res.user)[0].id})
            return newState;
        case LOGOUT_USER:
            return _default;
        default:
            return state;;
    }
}