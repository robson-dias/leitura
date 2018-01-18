import { combineReducers } from 'redux'

import {
    ADD_POST,
} from '../Actions'

const initialPostState = {
    id: null,
    timestamp: null,
    title: null,
    body: null,
    category: null,
    author: null,
    footer: null
}

function post(state = initialPostState, action) {
    switch (action.type) {
        case ADD_POST:
            const { post } = action

            return {
                ...state,
                post
            }
        default:
            return state
    }
}

export default combineReducers({
    post
})