import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Components/Home-page";
import { GetNewsArticles } from "./Api";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>NC Articles</h1>
        <Link to="/articles">List of Articles</Link>


          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<GetNewsArticles />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
