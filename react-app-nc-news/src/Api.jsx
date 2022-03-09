import axios from "axios";

const newsArticles = axios.create({
    baseUrl: "https://bertf-nc-news.herokuapp.com/api/"
})