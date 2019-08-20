export const createTag = tag => {
    return $.ajax({
        type: "POST",
        url: "api/tags",
        data: { tag }
    })
}


export const deleteTag = tagId => {
    return $.ajax({
        type: "DELETE",
        url: `api/tags/${tagId}`
    })
}