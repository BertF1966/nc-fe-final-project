import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNewsArticleById } from "../Api";

export default function SelectArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  useEffect(() => {
    getNewsArticleById(article_id).then((article) => {
      setArticle([article]);
    });
  }, [article_id]);

    console.log(article)
      return (
          <div>
          <header className="App-header">
            <h2>Articles</h2>
          </header>

            {article.map((item) => {
                return (
          <div className="Article-card" key={item.article_id}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.topic}</p>
            <p>Comments {item.comment_count}</p>
            <p>Votes {item.votes}</p>
          </div>
                );
            })};
        </div>
      )         
  }

