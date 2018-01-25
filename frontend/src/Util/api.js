const api = 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',
    'Authorization': 'token'
}

export const getCategoriesAPI = () => 
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

export const getPostsAPI = (category) => {
    let url = `${api}/posts`
    if (category)
        url = `${api}/${category}/posts`

    return fetch(url, { headers })
        .then(res => res.json())
        .then(data => data)
}

export const createPostAPI = (body) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())


export const editPostAPI = (body) =>
    fetch(`${api}/posts/${body.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

export const removePostAPI = (body) =>
    fetch(`${api}/posts/${body.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())


export const getCommentsAPI = (post) =>
    fetch(`${api}/posts/${post.id}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)

export const createCommentAPI = (body) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

export const removeCommentAPI = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

export const editCommentAPI = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())

export const voteCommentAPI = (id, vote) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vote)
    }).then(res => res.json())
