import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNewsArticleById, incrementVote } from "../Api";
import ArticleComments from "./ArticleComments";
import PostNewComment from "./PostNewComment";

export default function SelectArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [voting, setVoting] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectComment, setSelectComment] = useState([]);

  useEffect(() => {
    // console.log(article_id, '<<<useParams')
    getNewsArticleById(article_id).then((article) => {
      setArticle([article]);
      setIsLoading(false);
    });
  }, [article_id, setSelectComment]);

  function handleClick() {
    setVoting((currentVoting) => {
      return currentVoting + 1;
    });
    incrementVote(article_id).catch((err) => {
      setVoting((currentVoting) => {
        return currentVoting - 1;
      });
    });
  }

  return (
    <div>
      <header className="App-header">
        {isLoading && <h2>Loading...</h2>}
      </header>
      <ul className="selected-card">
        {article.map((item) => {
          return (
            <li key={item.article_id}>
              <h2>{item.title}</h2>
              <p>{item.author}</p>
              <p>{item.topic}</p>
              <p className="text-body">{item.body}</p>
              <p>Votes {item.votes + voting}</p>
              <button
                className="vote-button"
                size="large"
                variant="contained"
                onClick={handleClick}
              >
                Like
              </button>
              <p>Comments: {item.comment_count}</p>
              <PostNewComment setSelectComment={setSelectComment} />
              <h3 className="comments-header">Comments</h3>
              <ArticleComments
                selectComment={selectComment}
                setSelectComment={setSelectComment}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
