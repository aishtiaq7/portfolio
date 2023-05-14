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

function App() {
  const [offset, setOffset] = useState(0); //scrollY

  const [showFullScreenNav, setShowFullScreenNav] = useState(false); // show/Hide Full Scren Nav Bar

  // capturing when an 'ref', comes into the viewport
  const options = { threshold: 0.6 };
  const { ref, inView } = useInView(options); // for the 1st white section
  const inputRef = ref;
  const [ref2, inView2] = useInView(options); // for the 2nd white section

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      mixBlendMode: "difference",
    },

    text: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
      // backgroundColor: "red",
    },

    logo: {
      height: 45,
      width: 45,

      x: mousePosition.x - 45 / 2,
      y: mousePosition.y - 45 / 2, // 75 cuz radius is 150
      mixBlendMode: "difference",
      // backgroundColor: "rgb(82, 186, 246)",
      borderRadius: "10%",
    },
    portrait: {
      height: 90,
      width: 90,

      x: mousePosition.x - 90 / 2,
      y: mousePosition.y - 90 / 2, //
      // backgroundColor: "rgb(82, 186, 246)",
      opacity: "30%",
    },
    hideCursor: {
      display: "none",
      cursor: "pointer",
    },
    cardEnter: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      // mixBlendMode: "difference",
      backgroundColor: "rgb(104, 104, 104)",
      zIndex: "15",
    },
    tourchEnter: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
    },
  };

  const setCursorStyle = (style) => {
    setCursorVariant(style);
  };

  const parallaxSpeedValue = 0.35;
  return (
    <div>
      <FullScreenNav
        showFullScreenNav={showFullScreenNav}
        setShowFullScreenNav={setShowFullScreenNav}
      ></FullScreenNav>
      <Navbar
        offset={offset}
        invertNavColor={inView}
        invertNavColor2={inView2}
        textEnterLogo={() => setCursorStyle("logo")}
        textLeaveLogo={() => setCursorStyle("default")}
        setShowFullScreenNav={setShowFullScreenNav}
        showFullScreenNav={showFullScreenNav}
      ></Navbar>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      {/* Home Section */}
      <section id="home" className="homepage">
        <div className="landingSection">
          {/* left component */}
          <div className="landingTitle">
            <h3
              onMouseEnter={() => setCursorStyle("text")}
              onMouseLeave={() => setCursorStyle("default")}
              className="landingText"
              style={{
                transform: `translateY(${offset * parallaxSpeedValue}px)`,
              }}
            >
              On the journey
              <br />
              to learn & create
              <br />
              <span style={{ textDecoration: "underline" }}>software</span> that
              matters.
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
              onMouseEnter={() => setCursorStyle("portrait")}
              onMouseLeave={() => setCursorStyle("text")}
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
        textEnter={() => setCursorStyle("text")}
        textLeave={() => setCursorStyle("default")}
      ></Section>

      {/* Projects Section */}
      <DarkSection
        textEnter={() => setCursorStyle("cardEnter")}
        textLeave={() => setCursorStyle("default")}
        projectsData={cardItem}
      ></DarkSection>

      {/* Interests Sections */}
      <InterestSection
        innerRef={ref2}
        onMouseEnter={() => setCursorStyle("tourchEnter")}
        onMouseLeave={() => setCursorStyle("default")}
      ></InterestSection>

      <Footer
        offset={offset}
        footerEnter={() => setCursorStyle("hideCursor")}
        footerLeave={() => setCursorStyle("default")}
      ></Footer>
    </div>
  );
}

export default App;
