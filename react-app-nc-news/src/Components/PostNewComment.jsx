import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postComment } from "../Api";

export default function PostNewComment() {
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { article_id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    postComment(article_id, "tickle122", body)
    .then((res) => {
        console.log(res, '<<<1')
      })
      .then((res) => {
        setBody("");
        setIsPending(false)
        navigate( window.scrollTo({
          top: 0, 
          behavior: 'smooth'}))
        
      
      });
  };

  useEffect(() => {
    console.log("useEffect ran");
  });
  return (
    <div className="comment-form-div">
      <form onSubmit={handleSubmit} className="comment-form">
        <label>Comment on this article: </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Your comment here..."
          required
        />
        {!isPending && <button>Post</button>}
        {isPending && <button disabled>Posting comment...</button>}
      </form>
    </div>
  );
}
