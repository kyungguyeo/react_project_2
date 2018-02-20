import React from 'react'
import { Link, Route } from 'react-router-dom'
import Post from './Post'

export default function PostList ({ posts }) {

    return (
        <Route exact path="/" render={() => ( 
            <div>
                <Link to={"/new"}>Create a new post</Link>
                {Object.keys(posts).map((post, i) => (
                    <div key = {i} >
                        <Link to={"/posts/" + i}><Post post={posts[post]} /></Link>
                    </div>
                ))}
            </div>
        )} />
      );
}