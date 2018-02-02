import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import PostList from './PostList'
import EditPost from './EditPost'
import Post from './Post'
import PostDetail from './PostDetail'
import '../index.css'
import { connect } from 'react-redux'
import { addPost, removePost, editPost, addComment, removeComment, upvotePost, downvotePost, upvoteComment, downvoteComment, fetchPosts, fetchComments, fetchCategories } from '../actions'


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({categories: this.props.fetchCategories()});
    this.setState({posts: this.props.fetchPosts()});
  }

  render() {
    const { posts, comments, addPost, removePost, editPost, addComment, removeComment, votePost, voteComment, fetchPosts, fetchComments, fetchCategories } = this.props
    console.log(this.props)
    return (
      <div className="App">
        <h1>Hello Posts!</h1>
        <Route exact path="/" render={() => ( 
          <PostList posts={posts} addPost={addPost} removePost={removePost}/>
        )} />
        <Route exact path="/posts/:id" render={(props) => (
          <PostDetail 
            post={posts[props.match.params.id]} 
            comments={[]}
            addComment={addComment}
            removeComment={removeComment}
            upvotePost={upvotePost}
            downvotePost={downvotePost}
            upvoteComment={upvoteComment}
            downvoteComment={downvoteComment}
          />
        )} />
        <Route exact path="/new" render={() => (
          <EditPost fresh={true} categories={this.state.categories} PostMethod={addPost}/>
        )}/>
        <Route path="/posts/:id/edit" render={(props) => (
          <EditPost fresh={false} post={posts[props.match.params.id]} categories={this.state.categories} PostMethod={editPost}/>
        )}/>
      </div>
    );
  }
}

function mapStateToProps (data) {
  const { posts, comments, categories } = data
  return {
    posts: data['posts'],
    comments: data['comments'],
    categories: data['categories']['categories']
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
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)