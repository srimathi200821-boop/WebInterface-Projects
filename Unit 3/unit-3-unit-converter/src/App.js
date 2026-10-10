import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Converter from "./Converter";
import Categories from "./Categories";
import History from "./History";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">
          Unit<span>Convert</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/converter">Converter</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/history">History</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;