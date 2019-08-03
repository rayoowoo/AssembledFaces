export const fetchTimelinePosts = userId => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/posts`
    })
}

export const fetchAllPosts = () => {
    return $.ajax({
        method: "GET",
        url: "api/posts"
    })
}

export const fetchPost = (userId, postId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/posts/${postId}`
    })
}

export const createPost = post => {
    return $.ajax({
        method: "POST",
        url: `api/users/${post.user_id}/posts`,
        data: {post}
    })
}

export const updatePost = post => {
    return $.ajax({
        method: "PATCH",
        url: `api/posts/${post.id}`,
        data: {post}
    })
}

export const deletePost = postId => {
    return $.ajax({
        method: "DELETE",
        url: `api/posts/${postId}`
    })
}