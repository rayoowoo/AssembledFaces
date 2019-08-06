export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
import * as COMMENTUtil from '../utils/comment_utils'

export const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const updateComment = comment => dispatch => {
    return COMMENTUtil.updateComment(comment)
                    .then( comment => dispatch(receiveComment(comment)),
                    errors => dispatch(receiveCommentErrors(errors)))
}

export const createComment = (postId, comment) => dispatch => {
    return COMMENTUtil.createComment(postId, comment)
                    .then(comment => dispatch(receiveComment(comment)),
                    errors => dispatch(receiveCommentErrors(errors)))
}

export const deleteComment = comment => dispatch => {
    return COMMENTUtil.deleteComment(comment.id)
                    .then(deletedComment => {
                        dispatch(removeComment(deletedComment))
                    },
                    errors => dispatch(receiveCommentErrors(errors)))
}

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
})
