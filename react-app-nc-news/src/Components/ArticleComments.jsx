import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, deleteComment } from "../Api";
import ScrollToTop from "./ScrollToTop";

export default function ArticleComments({ selectComment, setSelectComment }) {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
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
          <li className="comment-box" key={comment.article_id}>
            <p className="comment-item">{comment.body}</p>
            {!isLoading && (
              <button
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
                Deleting...
              </button>
            )}
            <p className="comment-item">Author: {comment.author}</p>
            <p className="comment-item">Likes: {comment.votes}</p>
            <button className="comment-vote-button">Like</button>
          </li>
        );
      })}
      <ScrollToTop />
    </ul>
  );
}
