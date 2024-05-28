import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import SubPage from "./Pages/SubPage";
import { createGlobalStyle } from "styled-components";

// 전역 스타일링 - App.jsx에 적어주기
const GlobalStyle = createGlobalStyle`
  body {
    background-color:#CDE8E5;
   
  }

`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/SubPage">SubPage</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SubPage" element={<SubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
