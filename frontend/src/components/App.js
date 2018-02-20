import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import PostList from './PostList'
import EditPost from './EditPost'
import PostDetail from './PostDetail'
import '../index.css'
import { connect, dispatch } from 'react-redux'
import { addPost, removePost, editPost, addComment, removeComment, upvotePost, downvotePost, upvoteComment, downvoteComment, fetchPosts, fetchComments, fetchCategories } from '../actions'


class App extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchCategories()
  }

  render() {
    const { posts, comments, categories } = this.props
    return (
      <div className="App">
        <h1>Hello Posts!</h1>
        <Route exact path="/" render={() => ( <PostList posts={posts} /> )} />
        <Route exact path="/new" render={() => ( <EditPost fresh={true} categories={categories} addPost={this.props.addPost}/> )}/>
        <Route exact path="/posts/:id/" render={(props) => (
          <PostDetail postid={props.match.params.id} posts={posts} comments={comments} />
        )} />
        <Route path="/posts/:id/edit" render={(props) => (
          <EditPost postid={props.match.params.id} fresh={false} post={posts[props.match.params.id]} categories={categories} handleSubmit={this.handleSubmit()}/>
        )} />
      </div>
    );
  }
}

function mapStateToProps (data) {
  const { posts, comments, categories } = data
  return {
    posts: data['posts'],
    comments: data['comments'],
    categories: data['categories']
  }
}


function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data)),
    removePost: (data) => dispatch(removePost(data)),
    editPost: (data) => dispatch(editPost(data)),
    addComment: (data) => dispatch(addComment(data)),
    upvotePost: (data) => dispatch(upvotePost(data)),
    downvotePost: (data) => dispatch(downvotePost(data)),
    removeComment: (data) => dispatch(removeComment(data)),
    upvoteComment: (data) => dispatch(upvoteComment(data)),
    downvoteComment: (data) => dispatch(downvoteComment(data)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: (data) => dispatch(fetchComments()),
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)