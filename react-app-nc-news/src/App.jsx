import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopicsPage from "./Components/TopicsPage";
import SelectArticle from "./Components/SelectArticle";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import AscDesc from "./Components/AscDesc";



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <header>
          <h1>Articles</h1>
          <AscDesc value={{order: 'asc'}}/>
          <Routes>
            <Route path="/" element={<TopicsPage />} />
            <Route path="/topics/:topic/articles" element={<TopicsPage />} />
            <Route path="/articles/:article_id" element={<SelectArticle />} />
          </Routes>
        </header>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
