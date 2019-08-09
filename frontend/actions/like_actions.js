import * as LIKEUtils from '../utils/like_utils'

export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS'
export const CLEAR_LIKE_ERRORS = 'CLEAR_LIKE_ERRORS'
export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

export const receiveLike = res => {
    return {
        type: RECEIVE_LIKE,
        res
    }
}

export const removeLike = res => ({
    type: REMOVE_LIKE,
    res
})

export const createLike = like => dispatch => {
    
    return LIKEUtils.createLike(like).then(res => dispatch(receiveLike(res)),
        errors => dispatch(receiveLikeErrors(errors)))
}

export const deleteLike = likeId => dispatch => {
    
    return LIKEUtils.deleteLike(likeId).then(res => dispatch(removeLike(res)),
        errors => dispatch(receiveLikeErrors(errors)))
}

export const receiveLikeErrors = errors => ({
    type: RECEIVE_LIKE_ERRORS,
    errors
})

export const clearLikeErrors = () => ({
    type: CLEAR_LIKE_ERRORS
})