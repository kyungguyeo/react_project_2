export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function addPost ({ id, timestamp, title, body, author, category }) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category,
    }
}

export function removePost ({ id }) {
    return {
        type: REMOVE_POST,
        id,
    }
}

export function editPost ({ id, title, text, category }) {
    return {
        type: EDIT_POST,
        id,
        title,
        text,
        category
    }
}

export function upvotePost ({ id }) {
    return {
        type: UP_VOTE_POST,
        id,
    }
}

export function downvotePost ({ id }) {
    return {
        type: DOWN_VOTE_POST,
        id,
    }
}

export function addComment ({ id, parentId, body, author }) {
    return {
        type: ADD_COMMENT,
        id,
        parentId,
        body,
        author
    }
}

export function removeComment ({ id }) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}

export function upvoteComment ({ id }) {
    return {
        type: UP_VOTE_COMMENT,
        id,
    }
}

export function downvoteComment ({ id }) {
    return {
        type: DOWN_VOTE_COMMENT,
        id,
    }
}

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})

export const fetchPosts = () => dispatch => (
  fetch("http://localhost:3001/posts/", { headers: { 'Authorization': 'whatever-you-want' }})
    .then(results => { return results.json(); })
        .then(posts => dispatch(receivePosts(posts)))
);

export const fetchComments = (post_id) => dispatch => (
    fetch("http://localhost:3001/posts/" + post_id + "/comments/", { headers: { 'Authorization': 'whatever-you-want' }})
        .then(results => { return results.json(); })
            .then(comments => dispatch(receiveComments(comments)))
);

export const fetchCategories = () => dispatch => (
    fetch("http://localhost:3001/categories/", { headers: { 'Authorization': 'whatever-you-want' }})
      .then(results => { return results.json(); })
        .then(categories => dispatch(receiveCategories(categories)))
);