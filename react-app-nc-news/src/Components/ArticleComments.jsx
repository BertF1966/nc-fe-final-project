import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, deleteComment } from "../Api";
import ScrollToTop from "./ScrollToTop";

export default function ArticleComments({selectComment, setSelectComment}) {
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setSelectComment(data);
    });
  }, [article_id, setSelectComment]);

  function handleClick(comment_id) {
    deleteComment(comment_id)
    .then(() => {
      setSelectComment((prevComments) => {
        return prevComments.filter((comment) => {
          return comment.comment_id !== comment_id
        })
      })
    })
  }

  return (
    <ul className="comments">
      {selectComment.map((comment) => {
        return (
          <li className="comment-box"key={comment.article_id}>
            <p className="comment-item">{comment.body}</p>
            <button onClick={() => {handleClick(comment.comment_id)}}>Delete</button>
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
