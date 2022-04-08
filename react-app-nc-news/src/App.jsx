import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopicsPage from "./Components/TopicsPage";
import SelectArticle from "./Components/SelectArticle";
import ArticleComments from "./Components/ArticleComments";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop"
// import PostComment from "./Components/PostComment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>NC Articles</h1>

          <Routes>
            <Route path="/" element={<TopicsPage />} />
            <Route path="/topics/:topic/articles" element={<TopicsPage />} />
            <Route path="/articles/:article_id" element={<SelectArticle />} />
            <Route path="/api/articles/:article_id/comments" element={<ArticleComments />} />
          </Routes>
        </header>
      </div>
    <ScrollToTop />
    </BrowserRouter>

  );
}

export default App;
