import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, deleteComment } from "../Api";
import ScrollToTop from "./ScrollToTop";

export default function ArticleComments() {
  const { article_id, comment_id } = useParams();
  const [selectComment, setselectComment] = useState([]);
  console.log(useParams())

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setselectComment(data);
    });
  }, [article_id]);

  function handleClick() {
    deleteComment(comment_id)
    .then(() => {

    })
  }

  return (
    <ul className="comments" key="article_id">
      {selectComment.map((comment) => {
        return (
          <li className="comment-box"key={comment.article_id}>
            <p className="comment-item">{comment.body}</p>
            <button onClick={handleClick}>Delete</button>
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
