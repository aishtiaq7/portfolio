import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

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
import { setWindowOffsetY } from "./features/cursor/globalStatesSlice";

const FooterComponent = () => {
  const dispatch = useDispatch();
  const [windowOffset, setWindowOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowOffset(window.pageYOffset);
      setWindowOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
const googleDriveResumeLink =
  "https://drive.google.com/file/d/1kdT6ksc8Snk4nSEbHnbEg42-OF9ij2jd/view?usp=sharing";
const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/resume" element={<ExternalRedirect to={googleDriveResumeLink} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    <FooterComponent />
  </Provider>
);
