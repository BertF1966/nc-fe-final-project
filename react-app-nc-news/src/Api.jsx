import axios from "axios";

const newsArticles = axios.create({
    baseURL: "https://bertf-nc-news.herokuapp.com"
})

export function getNewsArticles(topic) {
    if (topic === 'allArticles') {
        topic = null;
      }
    return newsArticles
    .get('/api/articles', {params: {topic: topic}})
    .then(({data}) => {
        return data.articles;
    })
}

export function getNewsArticleById(article_id) {
    return newsArticles
    .get(`/api/articles/${article_id}`)
    .then(({data}) => {
        return data.article;
    })
}

