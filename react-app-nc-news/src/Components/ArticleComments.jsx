import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../Api";
import ScrollToTop from "./ScrollToTop";

export default function ArticleComments() {
  const { article_id } = useParams();
  const [selectComment, setselectComment] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setselectComment(data);
    });
  }, [article_id]);

  return (
    <ul className="comments" key="article_id">
      {selectComment.map((comment) => {
        return (
          <li className="comment-box"key={comment.article_id}>
            <p className="comment-item">{comment.body}</p>
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
