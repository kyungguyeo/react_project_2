import React from 'react'

export default function Post ({ post }) {

  return (
    <div className="post">
      <span>
        <p>{post.title}</p>
        <p>{post.category}</p>
        <p>VOTE</p>
      </span>
    </div>
  )
}