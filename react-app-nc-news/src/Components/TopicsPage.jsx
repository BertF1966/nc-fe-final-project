import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getNewsArticles } from "../Api";
import ArticleCard from "./ArticleCard";

export default function TopicsPage() {
  const { topic } = useParams();
  const [selectTopic, setSelectTopic] = useState([]);
  const [sortArticles, setSortArticles] = useState([]);

  useEffect(() => {
    getNewsArticles(topic).then((data) => {
      setSelectTopic(data);
      setSortArticles(data);
    });
  }, [topic]);

  const navigate = useNavigate();
  function handleChange(e) {
    navigate(`/topics/${e.target.value}/articles`);
  }

  useEffect(() => {
    setSortArticles((prevValue) => {
      // prevValue.sort()
      console.log(prevValue);
      
    });
  }, [sortArticles]);

  function handleSort(e) {
    setSortArticles((prevValue) => {
      // prevValue.sort(e.target.value);

    });
  }

  return (
    <div>
      <header className="App-header">
        <label>
          <h2>Topics</h2>
            <select onChange={handleChange} name="topics" className="select">
              <option className="dropdown-item" value="allArticles">All articles</option>
              <option className="dropdown-item" value="coding">Coding</option>
              <option className="dropdown-item" value="cooking">Cooking</option>
              <option className="dropdown-item" value="football">Football</option>
            </select>
        </label>
        <label>
          <h2>Sort by</h2>
            <select onChange={handleSort} name="sortBy" className="select">
              <option className="dropdown-item" value="date">Date</option>
              <option className="dropdown-item" value="commentCount">Comment count</option>
              <option className="dropdown-item" value="votes">Votes</option>
              <option className="dropdown-item" value="asc-desc">Asc/desc</option>
            </select>
        </label>
      </header>
      <div className="container">
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
    </div>
  );
}
