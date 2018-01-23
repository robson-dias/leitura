export const ADD_POSTS = 'ADD_POSTS'
export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const CREATE_POST = 'CREATE_POST'

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