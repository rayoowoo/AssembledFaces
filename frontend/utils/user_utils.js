export const fetchAllUsers = string => {
    return $.ajax({
        method: "POST",
        url: `api/users/${string}`
    })
}

export const fetchUser = userId => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}`
    })
}

export const updateUser = (userId, formData) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const fetchUsersIndex = () => {
    return $.ajax({
        method: "GET",
        url: "api/users/all"
    })
}
