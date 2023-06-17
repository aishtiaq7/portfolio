import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

import Footer from "./components/Footer";
import FullScreenNav from "./components/FullScreenNav";
import Navbar from "./components/Navbar";
import {
  Section,
  DarkSection,
  InterestSection,
} from "./components/Subcomponents";

import { useInView } from "react-intersection-observer";
import { cardItem } from "./resources/Data";
import returnCursorVariant from "./resources/cursorStyles";

import { useSelector, useDispatch } from "react-redux";
import {
  setCursorStyle,
  updateCursorPosition,
} from "./features/cursor/cursorSlice";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  //Cursor Change logic
  const curVar = useSelector((state) => state.cursor.cursorVariant);
  const curPosition = useSelector((state) => state.cursor.cursorPosition);
  const dispatch = useDispatch();

  // Navbar states
  const [offset, setOffset] = useState(0); //scrollY
  const [showFullScreenNav, setShowFullScreenNav] = useState(false); // show/Hide Full Scren Nav Bar

  // Changing navbar color on different sections
  const options = { threshold: 0.6 };
  const { ref, inView } = useInView(options); // for the 1st white section
  const inputRef = ref;
  const [ref2, inView2] = useInView(options); // for the 2nd white section

  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState();
  // console.log('currentUrl:', currentUrl);

  useEffect(() => {
    const mouseMove = (e) => {
      dispatch(
        updateCursorPosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    };
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", mouseMove);
    setCurrentUrl(window.location.href);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCursorStyleFunction = (style) => {
    dispatch(setCursorStyle(style));
  };

  const parallaxSpeedValue = 0.35;
  return (
    <div>
      <ScrollToTop />
      <FullScreenNav
        showFullScreenNav={showFullScreenNav}
        setShowFullScreenNav={setShowFullScreenNav}
      ></FullScreenNav>
      <Navbar
        offset={offset}
        invertNavColor={inView}
        invertNavColor2={inView2}
        textEnterLogo={() => setCursorStyleFunction("logo")}
        textLeaveLogo={() => setCursorStyleFunction("default")}
        setShowFullScreenNav={setShowFullScreenNav}
        showFullScreenNav={showFullScreenNav}
      ></Navbar>

      <motion.div
        className="cursor"
        variants={returnCursorVariant(curPosition)}
        animate={curVar}
      />

      {/* Home Section */}
      <section id="home" className="homepage">
        <div className="landingSection">
          {/* left component */}
          <div className="landingTitle">
            <h3
              onMouseEnter={() => setCursorStyleFunction("text")}
              onMouseLeave={() => setCursorStyleFunction("default")}
              className="landingText"
              style={{
                transform: `translateY(${offset * parallaxSpeedValue}px)`,
              }}
            >
              On the journey
              <br />
              to learn & create
              <br />
              software that{" "}
              <span style={{ textDecoration: "underline" }}>matters</span>.
            </h3>
          </div>

          {/* right component */}
          <div
            className="portraitImg"
            style={{
              transform: `translateY(${offset * 0.3}px)`,
            }}
          >
            <img
              onMouseEnter={() => setCursorStyleFunction("portrait")}
              onMouseLeave={() => setCursorStyleFunction("text")}
              className="selfportrait"
              src={require("./resources/landingportrait.png")}
              alt="souvenir"
            />
          </div>
        </div>
      </section>

      {/* About Section  */}
      <Section
        offset={offset}
        innerRef={inputRef}
        textEnter={() => setCursorStyleFunction("text")}
        textLeave={() => setCursorStyleFunction("default")}
      ></Section>

      {/* Projects Section */}
      <DarkSection
        textEnter={() => setCursorStyleFunction("cardEnter")}
        textLeave={() => setCursorStyleFunction("default")}
        projectsData={cardItem}
      ></DarkSection>

      {/* Interests Sections */}
      <InterestSection
        innerRef={ref2}
        onMouseEnter={() => setCursorStyleFunction("tourchEnter")}
        onMouseLeave={() => setCursorStyleFunction("default")}
      ></InterestSection>

      <Footer
        offset={offset}
        footerEnter={() => setCursorStyleFunction("hideCursor")}
        footerLeave={() => setCursorStyleFunction("default")}
      ></Footer>
    </div>
  );
}

export default App;
