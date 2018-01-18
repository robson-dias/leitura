export const ADD_POST = 'ADD_POST'

export function addPost({ id, timestamp, title, body, category, author, footer }) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        category,
        author,
        footer
    }
}