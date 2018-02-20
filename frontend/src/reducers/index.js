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

function posts (state = {
    "8xf0y6ziyjabvozdd253nd": {
        'id':"8xf0y6ziyjabvozdd253nd",
        'timestamp':1467166872634,
        'title':"Udacity is the best place to learn React",
        'body':"Everyone says so after all.",
        'author':"thingtwo",
        'category':"react",
        'voteScore':6,
        'deleted':false,
        'commentCount':2
        }   
    }, action) {
    const { id, timestamp, title, body, author, category, deleted, voteScore, commentCount } = action
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case ADD_POST:
            const new_post = {
                [id]: {
                    'id': id,
                    'timestamp': timestamp,
                    'title': title,
                    'body': body,
                    'author': author,
                    'category': category,
                    'deleted': deleted,
                    'voteScore': voteScore,
                    'commentCount': commentCount,
                    }
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
                    ['voteScore']: state[id]['voteScore'] + 1
                }
            }
        case DOWN_VOTE_POST:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    ['voteScore']: state[id]['voteScore'] - 1
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

function comments (state = {
    "894tuq4ut84ut8v4t8wun89g": {
        'id':"894tuq4ut84ut8v4t8wun89g",
        'parentId':"8xf0y6ziyjabvozdd253nd",
        'timestamp':1468166872634,
        'body':"Hi there! I am a COMMENT.",
        'author':"thingtwo",
        'voteScore':6,
        'deleted':false,
        'parentDeleted':false,
    }
    }, action) {
        const { id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted } = action
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
                        'voteScore': voteScore,
                        'deleted': deleted,
                        'parentDeleted': parentDeleted
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
                        ['voteScore']: state[id]['voteScore'] + 1
                    }
                }
            case DOWN_VOTE_COMMENT:
                return {
                    ...state,
                    [id]: {
                        ...state[id],
                        ['voteScore']: state[id]['voteScore'] - 1
                    }
                }
            default:
                return state
          }
    }

function categories (state = ['react', 'reduct', 'something'], action) {
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