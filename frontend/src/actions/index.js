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
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'

export function addPost ({ id, timestamp, title, body, author, category, deleted, voteScore, commentCount }) {
  return { type: ADD_POST,
      id,
      timestamp,
      title,
      body,
      author,
      category,
      deleted,
      voteScore,
      commentCount
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

export const requestPosts = () => ({
    type: REQUEST_POSTS
});

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const requestComments = posts => ({
    type: REQUEST_COMMENTS,
    posts
});

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const requestCategories = () => ({
    type: REQUEST_CATEGORIES
});

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})


export const fetchPosts = () => dispatch => {
    dispatch(requestPosts());
    return fetch("http://localhost:3001/posts/", { headers: { 'Authorization': 'whatever-you-want' }})
    .then(results => { 
        const a = results.json(); 
        console.log('blah', a);
        return a
    })
    .then(posts => dispatch(receivePosts(posts)))
}

export function postPost(post) {
    console.log(post)
    fetch("http://localhost:3001/posts", {
        headers: {'Authorization': 'whatever-you-want'},
        method: 'POST',
        data: {
            ...post
        }
    })
    .then(function(response) {
        return response.json()
    })
};

// export const postPost = (post) => dispatch => (
//     fetch("http://localhost:3001/posts", {
//         headers: {'Authorization': 'whatever-you-want'},
//         method: 'POST',
//         data: {
//             ...post
//         }
//     })
//     .then(function(response) {
//         console.log(response)
//         return response.json()
//     })
// );

export const fetchComments = (post) => dispatch => {
    dispatch(requestComments(post));
    return fetch("http://localhost:3001/posts/" + '8xf0y6ziyjabvozdd253nd' + "/comments/", { headers: { 'Authorization': 'whatever-you-want' }})
        .then(results => { return results.json(); })
            .then(comments => dispatch(receiveComments(comments)))
}

export const fetchCategories = () => dispatch => {
    dispatch(requestCategories());
    fetch("http://localhost:3001/categories/", { headers: { 'Authorization': 'whatever-you-want' }})
      .then(results => { return results.json(); })
        .then(categories => dispatch(receiveCategories(categories)))
}
