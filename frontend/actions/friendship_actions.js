import * as FRIENDSHIPUtils from '../utils/friendship_utils'

export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS'
export const CLEAR_FRIENDSHIP_ERRORS = 'CLEAR_FRIENDSHIP_ERRORS'
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP'
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP'

export const receiveFriendship = friendship => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
})

export const removeFriendship = friendship => ({
    type: REMOVE_FRIENDSHIP_ERRORS,
    friendship
})

export const createFriendship = friendship => {
    return FRIENDSHIPUtils.createFriendship(friendship).then(res => dispatch(receiveFriendship(res)), 
    errors => dispatch(receiveFriendshipErrors(errors)))
}

export const approveFriendship = friendship => {
    return FRIENDSHIPUtils.updateFriendship(friendship).then(res => dispatch(receiveFriendship(res)),
        errors => dispatch(receiveFriendshipErrors(errors)))
}

export const deleteFriendship = friendship => {
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