import * as API from '../Util/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const CREATE_POST = 'CREATE_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const VOTE_POST = 'VOTE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

//------------------------------------------------
// Receive Posts
export function receivePostsAction({ posts }) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export const fetchPosts = () => dispatch => {
    API.getPostsAPI().then((posts) => dispatch(receivePostsAction({posts})))
}


//------------------------------------------------
// Receive Categories
export function receiveCategoriesAction({ categories }) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export const fetchCategories = () => dispatch => {
    API.getCategoriesAPI().then((categories) => dispatch(receiveCategoriesAction({ categories })))
}

//------------------------------------------------
// Create Post
export function createPostAction({ post }) {
    return {
        type: CREATE_POST,
        post
    }
}

export const createPost = (post) => dispatch => {
    API.createPostAPI(post).then((post) => dispatch(createPostAction({ post })))
}


//------------------------------------------------
// Edit Post
export function editPostAction({ post }) {
    return {
        type: EDIT_POST,
        post
    }
}

export const editPost = (post) => dispatch => {
    API.editPostAPI(post).then((post) => dispatch(editPostAction({ post })))
}

//------------------------------------------------
// Remove Post
export function removePostAction({ post }) {
    return {
        type: REMOVE_POST,
        post
    }
}

export const removePost = (post) => dispatch => {
    API.removePostAPI(post).then((post) => dispatch(removePostAction({ post })))
}

//------------------------------------------------
// Remove Post
export function votePostAction({ post }) {
    return {
        type: VOTE_POST,
        post
    }
}

export const votePost = (id, vote) => dispatch => {
    API.votePostAPI(id, vote).then((post) => dispatch(votePostAction({ post })))
}
