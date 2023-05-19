import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import LearnMore from "./screens/LearnMore";
import "./index.css";

//redux
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learnmore" element={<LearnMore />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);
