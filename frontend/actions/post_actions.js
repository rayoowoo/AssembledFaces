export const RECEIVE_TIMELINE_POSTS = "RECEIVE_TIMELINE_POSTS";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_POST_ERRORS = "CLEAR_POST_ERRORS";
import * as POSTUtil from '../utils/post_utils'


export const receiveTimelinePosts = posts => ({
    type: RECEIVE_TIMELINE_POSTS,
    posts
})

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const removePost = post => ({
    type: REMOVE_POST,
    post
})

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

export const fetchTimelinePosts = (userId) => dispatch => {
    return POSTUtil.fetchTimelinePosts(userId)
        .then(posts => dispatch(receiveTimelinePosts(posts)),
        errors => dispatch(receivePostErrors(errors)))
};

export const fetchAllPosts = () => dispatch => {
    return POSTUtil.fetchAllPosts()
        .then(posts => dispatch(receiveAllPosts(posts)),
        errors => dispatch(receivePostErrors(errors)))
};

export const fetchPost = (userId, postId) => dispatch => {
    return POSTUtil.fetchPost(userId, postId)
        .then(post => dispatch(receivePost(post)),
        errors => dispatch(receivePostErrors(errors)))
};

export const createPost = (userId, post) => dispatch => {
    return POSTUtil.createPost(userId, post)
        .then( post => dispatch(receivePost(post)),
        errors => dispatch(receivePostErrors(errors)))
}

export const updatePost = post => dispatch => {
    return POSTUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)),
        errors => dispatch(receivePostErrors(errors)))
}

export const deletePost = postId => dispatch => {
    return POSTUtil.deletePost(postId)
        .then(post => dispatch(removePost(post)),
        errors => dispatch(receivePostErrors(errors)))
}

export const clearPostErrors = () => ({
    type: CLEAR_POST_ERRORS
})