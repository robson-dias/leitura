export const ADD_POSTS = 'ADD_POSTS'
export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function addPostsAction({ posts }) {
    return {
        type: ADD_POSTS,
        posts
    }
}

export function addCategoriesAction({ categories }) {
    return {
        type: ADD_CATEGORIES,
        categories
    }
}

export function createPostAction({ post }) {
    return {
        type: CREATE_POST,
        post
    }
}

export function editPostAction({ post }) {
    return {
        type: EDIT_POST,
        post
    }
}

export function removePostAction({ post }) {
    return {
        type: REMOVE_POST,
        post
    }
}