export const createComment = (postId, comment) => {
    return $.ajax({
        method: "POST",
        url: `/api/posts/${postId}/comments`,
        data: {comment}
    })
}

export const updateComment = comment => {
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
}

export const removeComment = commentId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
}