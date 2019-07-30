import * as SessionAPIUtil from '../utils/session_api_utils'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_USER
})

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
                        .then( user => dispatch(receiveCurrentUser(user)),
                        errors => dispatch(receiveSessionErrors(errors)))
}

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
                        .then (user => dispatch(receiveCurrentUser(user)),
                        errors => dispatch(receiveSessionErrors(errors)))
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
                        .then (() => dispatch(logout()),
                        errors => dispatch(receiveSessionErrors(errors)))
}

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})