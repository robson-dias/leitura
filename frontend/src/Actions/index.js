import * as API from '../Util/api'
import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    CREATE_POST,
    EDIT_POST,
    REMOVE_POST,
    VOTE_POST,
    RECEIVE_COMMENTS,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
    VOTE_COMMENT
} from './types'

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
// Vote Post
export function votePostAction({ post }) {
    return {
        type: VOTE_POST,
        post
    }
}

export const votePost = (id, vote) => dispatch => {
    API.votePostAPI(id, vote).then((post) => dispatch(votePostAction({ post })))
}

//------------------------------------------------
// Receive Comments
export function receiveCommentsAction({ post, comments }) {
    return {
        type: RECEIVE_COMMENTS,
        post,
        comments
    }
}

export const fetchComments = (post) => dispatch => {
    API.getCommentsAPI(post).then((comments) => dispatch(receiveCommentsAction({ post, comments })))
}

//------------------------------------------------
// Create Comment
export function createCommentAction({ post, comment }) {
    return {
        type: CREATE_COMMENT,
        post,
        comment
    }
}

export const createComment = (post, comment) => dispatch => {
    API.createCommentAPI(comment).then((comment) => dispatch(createCommentAction({ post, comment })))
}

//------------------------------------------------
// Edit Comments
export function editCommentAction({ post, comment }) {
    return {
        type: EDIT_COMMENT,
        post,
        comment
    }
}

export const editComment = (post, comment) => dispatch => {
    API.editCommentAPI(comment).then((comment) => dispatch(editCommentAction({ post, comment })))
}

//------------------------------------------------
// Remove Comments
export function removeCommentAction({ post, comment }) {
    return {
        type: REMOVE_COMMENT,
        post,
        comment
    }
}

export const removeComment = (post, comment) => dispatch => {
    API.removeCommentAPI(comment).then((comment) => dispatch(removeCommentAction({ post, comment })))
}

//------------------------------------------------
// Vote Comment
export function voteCommentAction({ post, comment }) {
    return {
        type: VOTE_COMMENT,
        post,
        comment
    }
}

export const voteComment = (post, id, vote) => dispatch => {
    API.voteCommentAPI(id, vote).then((comment) => dispatch(voteCommentAction({ post, comment })))
}

