import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsArticles } from "../Api";

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
        <h2>Topics Page</h2>

        <select onChange={handleChange} name="topics" id="topics">
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
          <option value="football">Football</option>
        </select>
      </header>
      {selectTopic.map((item) => {
        return (
          <div key={item.article_id}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.topic}</p>
            <p>Comments {item.comment_count}</p>
            <p>Votes {item.votes}</p>
          </div>
        );
      })}
    </div>
  );
}
