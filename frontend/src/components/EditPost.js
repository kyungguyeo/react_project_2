import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { cuid } from 'cuid';
import { connect } from 'react-redux'
import { addPost, removePost, editPost, postPost } from '../actions'

class EditPost extends Component {

    handleSubmit(event) {
        event.preventDefault();
        var cuid = require('cuid');
        this.props.addPost({
                            id: cuid(),
                            timestamp: Date.now(),
                            title: this.title.value,
                            body: this.body.value,
                            author: this.author.value,
                            category: this.category.value,
                            deleted: false,
                            voteScore: 0,
                            commentCount: 0
                            });
        this.props.postPost({
                            id: cuid(),
                            timestamp: Date.now(),
                            title: this.title.value,
                            body: this.body.value,
                            author: this.author.value,
                            category: this.category.value,
                            });
    }
    render() {
        const { fresh, categories, post, addPost } = this.props
        var cuid = require('cuid');
        return (
            <div>
                {fresh ? (
                    <div>
                        <h1>A new post?!</h1>
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <p>Title:</p>
                            <input name="title" type="text" ref={(input) => {this.title = input; }} />
                            <p>Body:</p>
                            <textarea name="body" ref={(input) => {this.body = input; }} />
                            <p>Category:</p>
                            <select name="category" ref={(input) => {this.category = input; }}>
                              {categories.map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                              ))}
                            </select>
                            <p>Author: </p>
                            <input name="author" type="text" ref={(input) => {this.author = input; }} />
                            <input type="submit" value="Submit"/>
                        </form>
                        <Link to={"/"}>Back to List</Link>
                    </div>
                    ): (
                    <div>
                        <h1>Let's Edit the Post!</h1>
                        <form>
                            <p>Title:</p>
                            <input name="title" type="text" placeholder={post.title}/>
                            <p>Body:</p>
                            <textarea name="body" placeholder={post.body}/>
                            <p>Category:</p>
                            <select>
                              {categories.map((category, i) => (
                                <option key={i} value={category}>{category}</option>
                              ))}
                            </select>
                            <p>Author: </p>
                            <input name="author" type="text" placeholder={post.author}/>
                            <input type="submit" value="Submit"/>
                        </form>
                        <Link to={"/posts/" + post.id}>Back to Post</Link>
                    </div>
                    )
                }
            </div>
            )
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
    postPost: (data) => dispatch(postPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)