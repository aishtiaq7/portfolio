import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import LearnMore from "./screens/LearnMore";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/learnMore" element={<LearnMore/>} />
      {/* <Route path="/resume" element={<Resume />} /> */}
    </Routes>
  </BrowserRouter>
);
