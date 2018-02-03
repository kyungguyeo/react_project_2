import { combineReducers } from 'redux'

import {
    ADD_POST,
    REMOVE_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST,
    EDIT_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT,
    RECEIVE_POSTS,
    RECEIVE_COMMENTS,
    RECEIVE_CATEGORIES
} from '../actions'

function posts (state = {}, action) {
    const { id, timestamp, title, body, author, category } = action
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case ADD_POST:
            const new_post = {
                'id': id,
                'timestamp': timestamp,
                'title': title,
                'body': body,
                'author': author,
                'category': category
                }
            return {
                ...state,
                ...new_post
            }
        case REMOVE_POST:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['deleted']: true
                }
            }
        case UP_VOTE_POST:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['voteScore']: state[id]['voteScore'] += 1
                }
            }
        case DOWN_VOTE_POST:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['voteScore']: state[id]['voteScore'] -= 1
                }
            }
        case EDIT_POST:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['title']: title,
                    ['body']: body,
                    ['author']: author,
                    ['category']: category
                }
            }
        default:
            return state
    }
}

function comments (state = {}, action) {
    const { id, parentId, timestamp, body, author } = action
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case ADD_COMMENT:
            const new_comment = {
                id: {
                    'id': id,
                    'parentId': parentId,
                    'timestamp': timestamp,
                    'body': body,
                    'author': author,
                    'voteScore': 0,
                    'deleted': false,
                    parentDeleted: false
                }
            }
            return {
                ...state,
                [id]: {
                    ...state,
                    ...new_comment
                }
            }
        case REMOVE_COMMENT:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['deleted']: true
                }
            }
        case UP_VOTE_COMMENT:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['voteScore']: state[id]['voteScore'] += 1
                }
            }
        case DOWN_VOTE_COMMENT:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['voteScore']: state[id]['voteScore'] -= 1
                }
            }
        default:
            return state
      }
}

function categories (state = {}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories.categories.map((category) => category.name)
        default:
            return state
    }
}


export default combineReducers({
    posts,
    comments,
    categories
})