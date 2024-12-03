import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
export default function App() {
  return (
    <Router>
    <div>
      {/* Navigation Links (optional) */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/login">Login</Link> 
          </li>
        </ul>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Home or Landing page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
      </Routes>
    </div>
  </Router>
  );
}
