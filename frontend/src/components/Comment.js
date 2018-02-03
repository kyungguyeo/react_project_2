import React from 'react'

export default function Comment ({ comment }) {

  return (
    <div className="comment">
      <span>
        <p>{comment.body}</p>
        <p>VOTE</p>
      </span>
    </div>
  )
}