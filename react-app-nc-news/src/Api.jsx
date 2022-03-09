import axios from "axios";

const newsArticles = axios.create({
    baseURL: "https://bertf-nc-news.herokuapp.com"
})

export function GetNewsArticles() {
    return newsArticles
    .get('/api/articles')
    .then(({data}) => {
        return data.articles;
    })
}
