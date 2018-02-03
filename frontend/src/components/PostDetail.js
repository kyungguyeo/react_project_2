import React from 'react'
import Comment from './Comment'
import { Link } from 'react-router-dom'

export default function PostDetail ({ post, comments }) {
    console.log(post)
    console.log(comments)
    return (
        <div>
            <h2>Here is the post!</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Category: {post.category}</p>
            <p>Author: {post.author}</p>
            <p>Votes: {post.voteScore}</p>
            <h2>Here are the comments!</h2>
            {comments.map((comment, i) => (
                <div key={i}>
                    <Comment body={comment.body} author={comment.author} votes={comment.voteScore}/>
                </div>
            ))}
            <Link to={"/posts/" + post['id'] + "/edit"}>Edit this post</Link>
            <Link to={"/posts/" + post['id'] + "/delete"}>Delete this post</Link>
            <Link to={"/"}>Back to List</Link>
            </div>
      )
}