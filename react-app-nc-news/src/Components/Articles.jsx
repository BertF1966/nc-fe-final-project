// import React from 'react';
import {useState} from "react";
import * as api from "../Api";
import { useEffect } from "react";

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
       api.GetNewsArticles()
        .then((articles) => {
            setArticles(articles)
        })
    },[articles])
    console.log(articles)
    return {articles}
}