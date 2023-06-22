import React from "react";
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import LearnMore from "./screens/LearnMore";
import "./index.css";

//redux
import store from "./store";
import { Provider, useDispatch } from "react-redux";
import Footer from "./components/Footer";
import {
  makeCursorDefault,
  setCursorStyle,
} from "./features/cursor/cursorSlice";


const FooterComponent = () => {
  const dispatch = useDispatch();
  const [windowOffset, setWindowOffset] = useState(0);

  // console.log('footer offset:', windowOffset);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('scrollY:', window.scrollY);
      setWindowOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Footer
      footerEnter={() => dispatch(setCursorStyle("hideCursor"))}
      footerLeave={() => dispatch(makeCursorDefault())}
      offset={windowOffset}
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
    <FooterComponent />
  </Provider>
);
