export const createLike = like => {
    
    return $.ajax({
        type: "POST",
        url: "api/likes",
        data: { like }
    })
}


export const deleteLike = likeId => {
    
    return $.ajax({
        type: "DELETE",
        url: `api/likes/${likeId}`
    })
}