import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import HomePage from "./Components/Home-page";
// import { getNewsArticles } from "./Api";
import TopicsPage from "./Components/TopicsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>NC Articles</h1>
         

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/topics/:topic/articles' element={<TopicsPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
