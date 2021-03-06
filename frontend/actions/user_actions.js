export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";
import * as USERUtil from '../utils/user_utils'


export const receiveAllUsers = res => ({
    type: RECEIVE_ALL_USERS,
    res
})
export const receiveUser = res => ({
    type: RECEIVE_USER,
    res
})

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const fetchUsersIndex = () => dispatch => {
    return USERUtil.fetchUsersIndex()
                .then(res => dispatch(receiveAllUsers(res))),
                errors => dispatch(receiveUserErrors(errors))
}

export const fetchFriends = (string, id) => dispatch => {
    return USERUtil.fetchFriends(string, id)
                .then(res => dispatch(receiveAllUsers(res)),
                errors => dispatch(receiveUserErrors(errors)))
}

export const fetchAllUsers = string => dispatch => {
    if (string !== "") {
            return USERUtil.fetchAllUsers(string)
            .then(res => dispatch(receiveAllUsers(res)),
                errors => dispatch(receiveUserErrors(errors)))
    }
};

export const fetchUser = id => dispatch => {
    return USERUtil.fetchUser(id)
        .then(res => dispatch(receiveUser(res)),
            errors => dispatch(receiveUserErrors(errors)))
};

export const updateUser = (userId, formData) => dispatch => {
    return USERUtil.updateUser(userId, formData)
        .then(res => dispatch(receiveUser(res)),
            errors => dispatch(receiveUserErrors(errors)))
}

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})