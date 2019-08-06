export const createFriendship = friendship => {
    return $.ajax({
        type: "POST",
        url: "api/friendships",
        friendship
    })
}

export const approveFriendship = friendship => {
    return $.ajax({
        type: "PATCH",
        url: `api/friendships/${friendship.id}`,
        friendship
    })
}

export const deleteFriendship = friendshipId => {
    return $.ajax({
        type: "DELETE",
        url: `api/friendships/${friendshipId}`
    })
}