import { combineReducers } from 'redux'

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
} from '../Actions/types'

function posts(state = {}, action) {

    const { post, comments, comment } = action

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts

        case CREATE_POST:
            return state.concat([action.post])

        case EDIT_POST:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments: statePost.comments || {} }  : statePost)

        case VOTE_POST:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments: statePost.comments || {}}  : statePost)

        case REMOVE_POST:
            return state.filter(statePost => statePost.id !== action.post.id)

        case RECEIVE_COMMENTS:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments} : statePost)

        case CREATE_COMMENT:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments: (post.comments ? post.comments.concat([comment]) : comment) } : statePost)

        case EDIT_COMMENT:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments: post.comments.map((stateComment) => stateComment.id === comment.id ? comment : stateComment) } : statePost)

        case REMOVE_COMMENT:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments: post.comments.filter(commentPost => commentPost.id !== comment.id) } : statePost)

        case VOTE_COMMENT:
            return state.map((statePost) => statePost.id === post.id ? { ...post, comments: post.comments.map((stateComment) => stateComment.id === comment.id ? comment : stateComment) } : statePost)

        default:
            return state
    }
}

function categories(state = {}, action) {

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const { categories } = action
            return categories

        default:
            return state
    }
}

export default combineReducers({
    posts,
    categories
})