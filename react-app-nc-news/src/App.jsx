import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopicsPage from "./Components/TopicsPage";
import SelectArticle from "./Components/SelectArticle";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
// import UserContext from "./Components/UserContext";

function App() {
  // const [user, setUser] = useState()

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>NC Articles</h1>
          <Routes>
            {/* <UserContext.Provider value={{}}> */}
            <Route path="/" element={<TopicsPage />} />
            <Route path="/topics/:topic/articles" element={<TopicsPage />} />
            <Route path="/articles/:article_id" element={<SelectArticle />} />
            {/* </UserContext.Provider> */}
          </Routes>
        </header>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
