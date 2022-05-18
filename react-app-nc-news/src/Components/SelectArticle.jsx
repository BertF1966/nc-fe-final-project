import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNewsArticleById} from "../Api";
import ArticleComments from "./ArticleComments";
import PostNewComment from "./PostNewComment";
import LikeButton from "./LikeButton";


export default function SelectArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectComment, setSelectComment] = useState([]);

  useEffect(() => {
    getNewsArticleById(article_id).then((article) => {
      setArticle([article]);
      setIsLoading(false);
    });
  }, [article_id, setSelectComment]);

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
              <LikeButton article_id={item.article_id} votes={item.votes}/>
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
