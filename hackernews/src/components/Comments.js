import React, { useState, useEffect } from 'react'
import {v4 as uuidv4 } from "uuid";
import ReactMarkdown from 'react-markdown'

const Comments = (props) => {

  const [comments, setComments] = useState([]);
  const [commentsReady, setCommentsReady] = useState(false);

  useEffect(() => {
    if (!commentsReady) {
      fetchComments();
    }
    
  })

  const fetchComments = () => {

    let id = props.id
    if(!id) {
     console.log("Object ID is missing")
    } else {
      fetch(`https://hn.algolia.com/api/v1/search?tags=comment,story_${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
    }

    
    setTimeout(() => {
      setCommentsReady(true);
      console.log(comments);
    }, 1000)
    
  }

  return (
    <div id="comment-container">
    <h3 id="comment-header">Comments</h3>
      {commentsReady  ? comments.hits.map((comment) => (
      <div key={uuidv4()}>
        <h5>{comment.created_at.substr(0, 10)}</h5>
        <ReactMarkdown className="comment-markdown">{comment.comment_text.replace(/<[^>]*>?/gm, '')}</ReactMarkdown>
        <p id="comment-border" style={{borderBottom: "3px solid #3286b7"}}></p>
      </div>
      )): null}
    </div>
  )
}

export default Comments;

// comments.hits.map((comment) => (
//   <div key={uuidv4()}>
//       <h5>{comment.comment_text}</h5>
//        <h5>{comment.created_at.substr(0, 10)}</h5>
//      </div>
// ))
