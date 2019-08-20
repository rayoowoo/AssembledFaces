import * as TAGUtils from '../utils/tag_utils'

export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS'
export const CLEAR_TAG_ERRORS = 'CLEAR_TAG_ERRORS'
export const RECEIVE_TAG = 'RECEIVE_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'

export const receiveTag = res => {
    return {
        type: RECEIVE_TAG,
        res
    }
}

export const removeTag = res => ({
    type: REMOVE_TAG,
    res
})

export const createTag = tag => dispatch => {
    return TAGUtils.createTag(tag).then(res => dispatch(receiveTag(res)),
        errors => dispatch(receiveTagErrors(errors)))
}

export const deleteTag = tagId => dispatch => {
    return TAGUtils.deleteTag(tagId).then(res => dispatch(removeTag(res)),
        errors => dispatch(receiveTagErrors(errors)))
}

export const receiveTagErrors = errors => ({
    type: RECEIVE_TAG_ERRORS,
    errors
})

export const clearTagErrors = () => ({
    type: CLEAR_TAG_ERRORS
})