import React from 'react'
import { Link, Route } from 'react-router-dom'
import Post from './Post'
import PostDetail from './PostDetail'

export default function PostList ({ posts, addPost, removePost }) {

    return (
        <div>
            <Link to={"/new"}>Create a new post</Link>
            {Object.keys(posts).map((p, i) => (
                <div key = {i} >
                    <Link to={"/posts/" + p}><Post post={posts[p]} /></Link>
                </div>
            ))}
        </div>
      );
}