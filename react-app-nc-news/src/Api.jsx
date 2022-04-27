import axios from "axios";

const newsArticles = axios.create({
  baseURL: "https://bertf-nc-news.herokuapp.com",
});

export function getNewsArticles(topic) {
  if (topic === "allArticles") {
    topic = null;
  }
  return newsArticles
    .get("/api/articles", { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
}

export function getNewsArticleById(article_id) {
  return newsArticles.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function incrementVote(article_id) {
  return newsArticles
    .patch(`/api/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.article;
    });
}

export function getCommentsByArticleId(article_id) {
  return newsArticles
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}

export function postComment(article_id, author, body) {
  return newsArticles
    .post(`/api/articles/${article_id}/comments`, {
      body: body,
      username: author,
    })
    .then(({ data }) => {
      return data.comment;
    });
}

export function deleteComment(comment_id) {
  return newsArticles.delete(`/api/comments/${comment_id}`).then((data) => {
    return data;
  });
}
