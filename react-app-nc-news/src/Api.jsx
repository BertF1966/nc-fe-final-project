import axios from "axios";


const newsArticles = axios.create({
    baseURL: "https://bertf-nc-news.herokuapp.com/api/"
})