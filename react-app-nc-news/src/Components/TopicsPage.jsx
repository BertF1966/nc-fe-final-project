import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getNewsArticles } from "../Api";
import ArticleCard from "./ArticleCard";

export default function TopicsPage() {
  const { topic } = useParams();
  const [selectTopic, setSelectTopic] = useState([]);
  useEffect(() => {
    getNewsArticles(topic).then((data) => {
      setSelectTopic(data);
    });
  }, [topic]);

  const navigate = useNavigate();
  function handleChange(e) {
    navigate(`/topics/${e.target.value}/articles`);
  }

  return (
    <div>
      <header className="App-header">
        <h2>Topics</h2>

        <select onChange={handleChange} name="topics" id="topics">
          <option value="allArticles">All articles</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="football">Football</option>
        </select>
      </header>

      {selectTopic.map((item) => {
        return (
          <div className="Article-card" key={item.article_id}>
            <Link to={`/articles/${item.article_id}`} className="link">
            <ArticleCard
              key={item.id}
              title={item.title}
              author={item.author}
              topic={item.topic}
              comments={item.comment_count}
              votes={item.votes}
             />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
