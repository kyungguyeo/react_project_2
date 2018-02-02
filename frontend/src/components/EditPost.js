import React from 'react'
import { Link, Route } from 'react-router-dom'
import Post from './Post'

export default function EditPost ({ fresh, post, categories, PostMethod }) {
    
    return (
        <div>
            {fresh ? (
                <div>
                    <h1>A new post?!</h1>
                    <form onSubmit={PostMethod({})}>
                        <p>Title:</p>
                        <input name="title" type="text" />
                        <p>Body:</p>
                        <textarea name="body" />
                        <p>Category:</p>
                        <select>
                          {categories.map((category, i) => (
                            <option key={i} value={category}>{category}</option>
                          ))}
                        </select>
                        <p>Author: </p>
                        <input name="author" type="text" />
                        <input type="submit" value="Submit" />
                    </form>
                    <Link to={"/"}>Back to List</Link>
                </div>
                ): (
                <div>
                    <h1>Let's Edit the Post!</h1>
                    <form onSubmit={this.handleSubmit}>
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