import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../Api";

export default function PostNewComment({ setSelectComment }) {
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postComment(article_id, "tickle122", body)
      .then((res) => {
        setSelectComment((currState) => {
          return [res, ...currState];
        });
      })
      .then(() => {
        setBody("");
        setIsLoading(false);
  
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
        {!isLoading && <button>Post</button>}
        {isLoading && <button disabled>Posting comment...</button>}
      </form>
    </div>
  );
}
