import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, deleteComment } from "../Api";
import LikeButton from "./LikeButton";

export default function ArticleComments({ selectComment, setSelectComment }) {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article_id)
    .then((data) => {
      setSelectComment(data);
    });
  }, [article_id, setSelectComment]);

  function handleClick(comment_id) {
    setIsLoading(() => true);
    deleteComment(comment_id).then(() => {
      setIsLoading(() => false);
      setSelectComment((prevComments) => {
        return prevComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
    });
  }
  
  return (
    <ul className="comments">
      {selectComment.map((comment) => {  
        return (
          <li className="comment-box" key={comment.comment_id}>
            <p className="comment-item">{comment.body}</p>
            <p className="comment-item">Author: {comment.author}</p>
            <LikeButton article_id={article_id} votes={comment.votes} author={comment.author} />
            {!isLoading && comment.author === 'tickle122' && (
              <button className="delete-button"
              onClick={() => {
                handleClick(comment.comment_id);
              }}
              >
              Delete
            </button>
          )} 
          {isLoading && (
            <button
              disabled
              onClick={() => {
                handleClick(comment.comment_id);
              }}
            >
              <h3>Deleting...</h3>
            </button>
            )} 

          </li>
        );
      })}
    </ul>
  );
}
