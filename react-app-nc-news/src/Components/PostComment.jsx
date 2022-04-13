import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Api";

export default function NewComment() {
const [body, setBody] = useState('')
const [author, setAuthor] = useState('')
const {article_id} = useParams();
const [votes, setVotes] = useState(0)

const handleSubmit = (e) => {
  e.preventDefault()
  postComment({body})
} 

  return (
    <div className="comment-form-div">
      <form onSubmit={handleSubmit} className="comment-form">
        <label>Comment on this article: </label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} 
        placeholder="Your comment here..." required />
      <button>Post
      </button>
      </form>
    </div>
  );
};


