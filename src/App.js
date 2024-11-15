import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
export default function App() {
  return (
    <Router>
      <div>
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
