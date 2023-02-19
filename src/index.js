import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// import Resume from "./screens/Resume";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
    </Routes>
  </BrowserRouter>
);
