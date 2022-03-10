import axios from "axios";

const newsArticles = axios.create({
    baseURL: "https://bertf-nc-news.herokuapp.com"
})

export function getNewsArticles(topic) {
    return newsArticles
    .get('/api/articles', {params: {topic: topic}})
    .then(({data}) => {
        console.log(data)
        return data.articles;
    })
}
