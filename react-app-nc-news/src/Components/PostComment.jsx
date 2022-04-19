import React, { useState} from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Api";

export default function NewComment() {
const [body, setBody] = useState('')
const {article_id} = useParams();


const handleSubmit = (e) => {
  e.preventDefault()
  postComment(article_id, 'tickle122', body).then(() => setBody(''))
  
} 

  return (
    <div className="comment-form-div">
      <form onSubmit={handleSubmit} className="comment-form">
        <label>Comment on this article: </label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} 
        placeholder="Your comment here..." required />
      <button >Post
      </button>
      </form>
    </div>
  );
};


