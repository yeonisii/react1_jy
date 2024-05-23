import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import SubPage from "./Pages/SubPage";

function App() {
  return (
    <Router>
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
