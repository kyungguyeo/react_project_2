import React from 'react'
import Comment from './Comment'
import { Link } from 'react-router-dom'

export default function PostDetail ({ postid, posts, comments }) {
    return (
        <div>
            <h2>Here is the post!</h2>
      {/* The id of the posts from the database do not match with the react router id */}
            <h3>{/*posts[postid].title*/}</h3>
            <p>{/*posts[postid].body*/}</p>
            <p>Category: {/*posts[postid].category*/}</p>
            <p>Author: {/*posts[postid].author*/}</p>
            <p>Votes: {/*posts[postid].voteScore*/}</p>
            <h2>Here are the comments!</h2>
      {/* fails when comments are empty */}
            {/*comments.filter((comment)=> comment.parentId === posts[postid]['id']).map((comment, i) => (
                <div key={i}>
                    <Comment comment={comment} />
                </div>
            ))*/}
            <Link to={"/posts/" + postid + "/edit"}>Edit this post</Link>
            <br/>
            <Link to={"/posts/" + postid + "/delete"}>Delete this post</Link>
            <br/>
            <Link to={"/"}>Back to List</Link>
        </div>
      )
}
