import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {getNewsArticles} from '../Api';

export default function HomePage() {

    const [article, setArticle] = useState([])
    useEffect(() => {
        getNewsArticles().then((data) => {
            setArticle(data)
        })
    }, [])

   const navigate = useNavigate();
    function handleChange(e) {
        console.log(e.target.value)
        navigate(`/topics/${e.target.value}/articles`);
   }

    return <div>
    <header className="App-header">
    <h2>Home</h2>

    <select onChange={handleChange}name="topics" id="topics">
  <option value="coding">Coding</option>
  <option value="cooking">Cooking</option>
  <option value="football">Football</option>
  
</select>
    </header>
    {article.map((item) => {
        return <div className="Article-card" key={item.article_id} >
            <h2>{item.title}</h2>
            <p>Author: {item.author}</p>
            <p>Topic: {item.topic}</p>
            <p>Comments {item.comment_count}</p>
            <p>Votes {item.votes}</p>

            </div>
    })}
    </div>
}

