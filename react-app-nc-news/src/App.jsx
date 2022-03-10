import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import HomePage from "./Components/Home-page";
import TopicsPage from "./Components/Topics-page";
import SelectArticle from "./Components/Articles-page";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>NC Articles</h1>
         

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/topics/:topic/articles' element={<TopicsPage />} />
            <Route path="/articles/:article_id" element={<SelectArticle />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
