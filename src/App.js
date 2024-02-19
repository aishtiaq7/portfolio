import { useEffect, useRef, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Rodal from "rodal";
import { useLocation } from "react-router-dom";

import FullScreenNav from "./components/FullScreenNav";
import Navbar from "./components/Navbar";
import {
  Section,
  DarkSection,
  InterestSection,
} from "./components/Subcomponents";
import AOS from "aos";

import { useInView } from "react-intersection-observer";
import { cardItem } from "./resources/Data";
import returnCursorVariant from "./resources/cursorStyles";

import { useSelector, useDispatch } from "react-redux";
import {
  setCursorStyle,
  updateCursorPosition,
} from "./features/cursor/cursorSlice";
import {
  setIsModalOpen,
  setModalContent,
  updateScreenWidth,
} from "./features/cursor/globalStatesSlice";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //Cursor Change logic
  const curVar = useSelector((state) => state.cursor.cursorVariant);
  const curPosition = useSelector((state) => state.cursor.cursorPosition);
  const dispatch = useDispatch();

  // Navbar states
  const [offset, setOffset] = useState(0); //scrollY
  const [showFullScreenNav, setShowFullScreenNav] = useState(false); // show/Hide Full Scren Nav Bar

  // Changing navbar color on different sections
  const options = { threshold: 0.3 };
  const { ref, inView } = useInView(options); // for the 1st white section
  const inputRef = ref;
  const [ref2, inView2] = useInView(options); // for the 2nd white section
  const [aboutSectionInView_Ref, aboutSectionInvView] = useInView(options); // for the 2nd white section
  // console.log('aboutSectionInView:', aboutSectionInvView)

  const [mattersRef, inViewMatters] = useInView(options); // for the 2nd white section
  const [mattersKey, setMattersKey] = useState(Math.random());
  useEffect(() => {
    AOS.init();
    if (!inViewMatters) {
    } else {
      setMattersKey(Math.random());
    }
  }, [inViewMatters]);

  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState();
  const { state } = useLocation();
  const { targetId } = state || {};

  const customStyles = {
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "fixed",
    zIndex: 200,

    /* Chane Rodal Dimension here: */
    // width: "10rem",
    // height: "8rem"
    // width: `${screenWidth < 600 ? "40%" : "60%"}`,
    width: `${screenWidth < 600 ? "80%" : "60%"}`,
  };
  const globalStates = useSelector((state) => state.globalStates);

  const rodalRef = useRef();

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

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

    const handleClickOutside = (event) => {
      if (rodalRef.current && !rodalRef.current.contains(event.target)) {
        dispatch(setIsModalOpen(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Event listener to update the state when the screen size changes
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      dispatch(updateScreenWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", onScroll);

      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);

  //spinner loading timeout
  const [isLoading, setIsLoading] = useState(true);
  const isFirstLoadDone = localStorage.getItem("isFirstLoadingDone");
  useEffect(() => {
    if (isFirstLoadDone) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("isFirstLoadingDone", "true");
      }, 1650);
    }
  }, [isFirstLoadDone]);

  const setCursorStyleFunction = (style) => {
    dispatch(setCursorStyle(style));
  };

  const parallaxSpeedValue = 0.35;

  const rodalContent = useSelector((state) => state.globalStates.modalContent);

  const getTechStackRender = (stackArray) => {
    return stackArray.map((item, index) => {
      return (
        <h3 key={item} className="tech">
          {item}
        </h3>
      );
    });
  };
  return (
    <div>
      {isLoading ? (
        <div className="loading">
        <div className="loading-text">
          <span className="loading-text-words">L</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">A</span>
          <span className="loading-text-words">D</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">N</span>
          <span className="loading-text-words">G</span>
        </div>
      </div>
      ) : (
        <div>
      <ScrollToTop />
      <FullScreenNav
        showFullScreenNav={showFullScreenNav}
        setShowFullScreenNav={setShowFullScreenNav}
      ></FullScreenNav>
      <Navbar
        offset={offset}
        invertNavColor={inView}
        invertNavColor2={(inView2)}
        aboutSectionInView={aboutSectionInvView}
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

      {globalStates.modalIsOpen && (
        <section className="rodalSection">
          <Rodal
            animation="flip"
            duraiont={550}
            visible={globalStates.modalIsOpen}
            onClose={() => {
              dispatch(setIsModalOpen(false));
              dispatch(setModalContent({}));
            }}
            customStyles={customStyles}
          >
            <div
              ref={rodalRef}
              className="rodal-parent flex-row"
              onMouseEnter={() => {
                dispatch(setCursorStyle("modalEnter"));
              }}
              onMouseLeave={() => {
                dispatch(setCursorStyle("default"));
              }}
            >
              <div className="modal-subSection titleStyles">
                <h2>{rodalContent.title}</h2>
                <h1
                  className="closeModalButton"
                  onMouseEnter={() => {
                    dispatch(setCursorStyle("crossEnter"));
                  }}
                  onMouseLeave={() => {
                    dispatch(setCursorStyle("modalEnter"));
                  }}
                  onClick={()=>{
                    dispatch(setIsModalOpen(false));
                    dispatch(setCursorStyle("default"));
                  }}
                >
                  X
                </h1>
              </div>

              <div className="modal-subSection modalDes">
                {rodalContent.descriontion}
              </div>
              <div className="modal-subSection techStack">
                {getTechStackRender(rodalContent.tech)}
              </div>
              <div className="modal-subSection">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={rodalContent.hyperlink}
                  className="openProjectLink"
                  onMouseEnter={()=>{
                    dispatch(setCursorStyle("hyperLinkEnter"));
                  }}
                  onMouseLeave={()=>{
                    dispatch(setCursorStyle("modalEnter"));
                  }}
                >
                  Open Project
                </a>
              </div>
            </div>
          </Rodal>
        </section>
      )}

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
              {/* <span style={{ textDecoration: "underline" }}>matters</span>. */}
              <span
                  ref={mattersRef}
                  className={`underline-animation ${
                    inViewMatters ? "in-view" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 255 32.61"
                    key={mattersKey}
                  >
                    <path
                      d="M5 14.11s54-8 125-9 120 5 120 5-200.5-5.5-239.5 17.5"
                      className="strokeWhite"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="10"
                    />
                  </svg>
                  matters
                </span>.
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
        aboutSectionInViewRef={aboutSectionInView_Ref}
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
    </div>
      )}
    </div>

    
  );
}

export default App;
