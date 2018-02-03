import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Post from './Post'
import PostDetail from './PostDetail'

export default function PostList ({ posts, comments, addPost, removePost }) {

    return (
        <Switch>
            <Route exact path="/posts" render={() => ( 
                <div>
                    <Link to={"/new"}>Create a new post</Link>
                    {posts.map((post, i) => (
                        <div key = {i} >
                            <Link to={"/posts/" + i}><Post post={post} /></Link>
                        </div>
                    ))}
                </div>
            )} />
            <Route exact path="/posts/:id" render={(props) => (
              <PostDetail 
                post={posts} 
                comments={comments}
              />
            )} />
        </Switch>
      );
}