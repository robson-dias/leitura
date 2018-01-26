import { combineReducers } from 'redux'

import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    CREATE_POST,
    EDIT_POST,
    REMOVE_POST,
    VOTE_POST
} from '../Actions'

function posts(state = {}, action) {

    const { post } = action

    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts

        case CREATE_POST:
            return state.concat([action.post])

        case EDIT_POST:
    
            return state.map((statePost) => statePost.id === post.id ? post : statePost)

        case VOTE_POST:

            return state.map((statePost) => statePost.id === post.id ? post : statePost)

        case REMOVE_POST:

            return state.filter(statePost => statePost.id !== action.post.id)

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