export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";
import * as USERUtil from '../utils/user_utils'


export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const fetchAllUsers = () => dispatch => {
    return USERUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)),
            errors => dispatch(receiveUserErrors(errors)))
};

export const fetchUser = id => dispatch => {
    return USERUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)),
            errors => dispatch(receiveUserErrors(errors)))
};

export const updateUser = user => dispatch => {
    return USERUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)),
            errors => dispatch(receiveUserErrors(errors)))
}

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})