import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import { getNewsArticleById, incrementVote } from "../Api";

export default function SelectArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [voting, setVoting] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    getNewsArticleById(article_id).then((article) => {
      setArticle([article]);
      setIsLoading(false)
    });
  }, [article_id]);
  
  function handleClick() {
    setVoting((currentVoting) => {
      console.log(voting)
      return currentVoting + 1;
    })
    incrementVote(article_id)
    .catch((err) => {
      console.log(err)
      setVoting((currentVoting) => {
        return currentVoting - 1;
      })
    })
  }
  
  return (
    <div>
      <header className="App-header">
        <h2>Article</h2>
      {isLoading && <h2>Loading...</h2>}
      </header>
      {article.map((item) => {
        return (
          <div className="Article-card" key={item.article_id}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.topic}</p>
            <p>{item.body}</p>
            <p>Comments {item.comment_count}</p>
            <p>Votes {item.votes + voting}</p>
            <button onClick={handleClick} >Like</button>
          </div>
        );
      })}
    </div>
  );
}
