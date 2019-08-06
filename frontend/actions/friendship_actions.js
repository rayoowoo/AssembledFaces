import * as FRIENDSHIPUtils from '../utils/friendship_utils'

export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS'
export const CLEAR_FRIENDSHIP_ERRORS = 'CLEAR_FRIENDSHIP_ERRORS'

export const createFriendship = friendship => {
    return FRIENDSHIPUtils.createFriendship(friendship).catch(errors => dispatch(receiveFriendshipErrors(errors)))
}

export const approveFriendship = friendship => {
    return FRIENDSHIPUtils.approveFriendship(friendship).catch(errors => dispatch(receiveFriendshipErrors(errors)))
}

export const deleteFriendship = friendship => {
    return FRIENDSHIPUtils.deleteFriendship(friendship).catch(errors => dispatch(receiveFriendshipErrors(errors)))
}

export const receiveFriendshipErrors = errors => ({
    type: RECEIVE_FRIENDSHIP_ERRORS,
    errors
})

export const clearFriendshipErrors = () => ({
    type: CLEAR_FRIENDSHIP_ERRORS
})