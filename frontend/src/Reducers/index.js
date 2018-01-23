import { combineReducers } from 'redux'

import {
    ADD_POSTS,
    ADD_CATEGORIES,
    CREATE_POST
} from '../Actions'

function posts(state = {}, action) {

    switch (action.type) {
        case ADD_POSTS:
            const { posts } = action
            return posts

        case CREATE_POST:
            const { post } = action
            return state.concat([post])
        default:
            return state
    }
}

function categories(state = {}, action) {

    switch (action.type) {
        case ADD_CATEGORIES:
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