import * as FRIENDSHIPUtils from '../utils/friendship_utils'

export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS'
export const CLEAR_FRIENDSHIP_ERRORS = 'CLEAR_FRIENDSHIP_ERRORS'
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP'
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'

export const receiveFriendship = res => {
     
    return {
        type: RECEIVE_FRIENDSHIP,
        res
    }
}

export const removeFriendship = res => ({
    type: REMOVE_FRIENDSHIP,
    res
})

export const createFriendship = friendship => dispatch => {
    return FRIENDSHIPUtils.createFriendship(friendship).then(res => dispatch(receiveFriendship(res)), 
    errors => dispatch(receiveFriendshipErrors(errors)))
}

export const approveFriendship = friendship => dispatch => {
    return FRIENDSHIPUtils.approveFriendship(friendship).then(res => dispatch(receiveFriendship(res)),
        errors => dispatch(receiveFriendshipErrors(errors)))
}

export const deleteFriendship = friendship => dispatch => {
    return FRIENDSHIPUtils.deleteFriendship(friendship).then(res => dispatch(removeFriendship(res)),
        errors => dispatch(receiveFriendshipErrors(errors)))
}

export const receiveFriendshipErrors = errors => ({
    type: RECEIVE_FRIENDSHIP_ERRORS,
    errors
})

export const clearFriendshipErrors = () => ({
    type: CLEAR_FRIENDSHIP_ERRORS
})