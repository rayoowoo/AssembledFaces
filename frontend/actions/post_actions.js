export const RECEIVE_TIMELINE_POSTS = "RECEIVE_TIMELINE_POSTS";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";
import * as POSTUtil from '../utils/post_utils'


export const receiveTimelinePosts = res => ({
    type: RECEIVE_TIMELINE_POSTS,
    res
})

export const receiveAllPosts = res => ({
    type: RECEIVE_ALL_POSTS,
    res
})

export const receivePost = res => ({
    type: RECEIVE_POST,
    res
})

export const removePost = res => ({
    type: REMOVE_POST,
    res
})

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

export const fetchTimelinePosts = userId => dispatch => {
    return POSTUtil.fetchTimelinePosts(userId)
        .then(res => dispatch(receiveTimelinePosts(res)),
        errors => dispatch(receivePostErrors(errors)))
};

export const fetchAllPosts = () => dispatch => {
    return POSTUtil.fetchAllPosts()
        .then(res => dispatch(receiveAllPosts(res)),
        errors => dispatch(receivePostErrors(errors)))
};

export const fetchPost = (userId, postId) => dispatch => {
    return POSTUtil.fetchPost(userId, postId)
        .then(res => dispatch(receivePost(res)),
        errors => dispatch(receivePostErrors(errors)))
};

// createPost needs to be able to accept a photo
export const createPost = (userId, formData) => dispatch => {
    return POSTUtil.createPost(userId, formData)
        .then( res => dispatch(receivePost(res)),
        errors => dispatch(receivePostErrors(errors)))
}

export const updatePost = post => dispatch => {
    return POSTUtil.updatePost(post)
        .then(res => dispatch(receivePost(res)),
        errors => dispatch(receivePostErrors(errors)))
}

export const deletePost = post => dispatch => {
    return POSTUtil.deletePost(post)
        .then(post => dispatch(removePost(post)),
        errors => dispatch(receivePostErrors(errors)))
}

export const clearPostErrors = () => ({
    type: CLEAR_POST_ERRORS
})