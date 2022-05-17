import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useSearchParams} from "react-router-dom";
import { getNewsArticles } from "../Api";
import ArticleCard from "./ArticleCard";
import AscDesc from "./AscDesc";

export default function TopicsPage() {
  const { topic, order } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({})
  const [selectTopic, setSelectTopic] = useState([]);
  const query = searchParams.get('sortBy')
  const navigate = useNavigate();
  
  useEffect(() => {
    getNewsArticles(topic, query, order).then((data) => {
      setSelectTopic(data);
      // console.log(data)
    });
  }, [topic, query, order]);
  
  function handleChange(e) {
    navigate(`/topics/${e.target.value}/articles`);
  }
  
  function handleSort(e) {
    setSearchParams({sortBy: e.target.value})
  }

  return (
    <div>
        <AscDesc value={order} />
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
              <option className="dropdown-item" value="created_at">Date</option>
              <option className="dropdown-item" value="comment_count">Comment count</option>
              <option className="dropdown-item" value="votes">Votes</option>
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
