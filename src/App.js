import { useEffect, useRef, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Rodal from "rodal";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import FullScreenNav from "./components/FullScreenNav";
import Navbar from "./components/Navbar";
import {
  Section,
  DarkSection,
  InterestSection,
} from "./components/Subcomponents";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
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
import ScrollToTop from "./screens/FullScreenReveal";
import FullScreenReveal from "./screens/FullScreenReveal";
import { TextHoverEffect } from "./components/ui/TextHoverEffect";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [showReveal, setShowReveal] = useState(true);

  // gsap.registerPlugin(ScrollToPlugin);

  const location = useLocation();
  useEffect(() => {
    setShowReveal(true);
  }, [location.pathname]); // Trigger when the pathname changes

  const handleRevealComplete = () => {
    setShowReveal(false);
    setStartGSAPAnimation(true);
  };

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

  const [mattersRef, inViewMatters] = useInView(options); // for the 2nd white section
  const [mattersKey, setMattersKey] = useState(Math.random());
  const [isLoaded, setIsLoaded] = useState(false); //to check wheather all content has been loaded or not

  const [startGSAPAnimation, setStartGSAPAnimation] = useState(false);

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
  const rodalContent = useSelector((state) => state.globalStates.modalContent);

  const rodalRef = useRef();

  /*
    - Cursor Logic
    - Other state updates
  */
  useEffect(() => {
    const mouseMove = (e) => {
      dispatch(
        updateCursorPosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    };
    setCurrentUrl(window.location.href);
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    const handleClickOutside = (event) => {
      if (rodalRef.current && !rodalRef.current.contains(event.target)) {
        dispatch(setIsModalOpen(false));
      }
    };
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      dispatch(updateScreenWidth(window.innerWidth));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mousedown", handleClickOutside);
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

  //star gsap anim when all content has been loaded.
  useEffect(() => {
    if (isFirstLoadDone) {
      setIsLoading(false);
      setStartGSAPAnimation(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("isFirstLoadingDone", "true");
        setStartGSAPAnimation(true);
      }, 4810);
    }
  }, [isFirstLoadDone]);

  const setCursorStyleFunction = (style) => {
    dispatch(setCursorStyle(style));
  };

  const parallaxSpeedValue = 0.35;

  const getTechStackRender = (stackArray) => {
    return stackArray.map((item, index) => {
      return (
        <h3 key={item} className="rodal__tech-item">
          {item}
        </h3>
      );
    });
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /*
      Redirect to specific section within this page.
  */
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    if (isLoaded && targetId) {
      let selectedRef;
      switch (targetId) {
        case "home":
          selectedRef = homeRef;
          break;
        case "about":
          selectedRef = aboutRef;
          break;
        case "contact":
          selectedRef = contactRef;
          break;
        default:
          console.log(`No ref found for ${targetId}`);
          return;
      }
      if (selectedRef && selectedRef.current && !isLoading) {
        gsap.to(window, {
          duration: 1.3, // Adjust duration as needed
          scrollTo: {
            y: selectedRef.current, // Scroll to the target section
            offsetY: 0, // Adjust offset if needed
            autoKill: false, // Automatically kill the tween if user scrolls manually
          },
          ease: "power1.inOut",
        });
      } else {
        console.log(`Ref for ${targetId} not found or not current.`);
      }
    }
  }, [targetId, isLoaded, isLoading]);

  const comp = useRef(null);

  //intro slider. GSAP
  useGSAP(
    () => {
      if (!isLoaded || !startGSAPAnimation) return;
      const t1 = gsap.timeline({
        onComplete: () => {
          setMattersKey((prevKey) => prevKey + 1);
          // setStartGSAPAnimation(false);
        },
      });
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 1.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.3,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "100",
          duration: 1.3,
        })
        .to("#intro-slider", {
          display: "none",
          duration: 0,
        });
    },
    { scope: comp.current, dependencies: [isLoaded, startGSAPAnimation] }
  );

  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>Awshaf Ishtiaque</title>
        <meta
          name="description"
          content="A collaborative & solution-driven software developer with 4+ years of experience in full-stack development & cloud computing. Web Application Developer, Instructor at CICCC, Co-Founder of Digitec Innovation, and SFU Computer Science Graduate."
        />
        <meta
          name="keywords"
          content="Awshaf, Ishtiaque, Web Application Developer, Full Stack Developer, Instructor, Co-Founder, Digitec Innovation, SFU, Computer Science Graduate"
        />
        <meta name="author" content="Awshaf Ishtiaque" />
        <link rel="canonical" href="https://awshaf.com" />
        <meta
          property="og:title"
          content="Web Application Developer | Instructor @CICCC | Co-Founder @Digitec Innovation | SFU CS Grad"
        />
        <meta
          property="og:description"
          content="Professional profile of a web application developer, instructor at CICCC, co-founder of Digitec Innovation, and SFU Computer Science graduate."
        />
        <meta property="og:image" content="%PUBLIC_URL%/landingportrait.png" />
        <meta property="og:url" content="https://awshaf.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {isLoading ? (
        <div className="loading">
          <div className="loading-text">
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">W</span>
            <span className="loading-text-words">S</span>
            <span className="loading-text-words">H</span>
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">F</span>
            <span className="loading-text-words">. C O M</span>
          </div>
        </div>
      ) : (
        <div ref={comp} style={{ position: "relative" }}>
          <FullScreenReveal
            text="Welcome to My Website"
            show={showReveal}
            onComplete={handleRevealComplete}
          />
          {isLoaded && startGSAPAnimation && (
            <div id="intro-slider" className="intro-sliderClass">
              <h1 id="title-1">Instructor</h1>
              <h1 id="title-2">Developer &</h1>
              <h1 id="title-3">Co-founder</h1>
            </div>
          )}
          <ScrollToTop />
          <FullScreenNav
            showFullScreenNav={showFullScreenNav}
            setShowFullScreenNav={setShowFullScreenNav}
          ></FullScreenNav>
          <Navbar
            offset={offset}
            invertNavColor={inView}
            invertNavColor2={inView2}
            aboutSectionInView={aboutSectionInvView}
            textEnterLogo={() => setCursorStyleFunction("onNavbarLinks")}
            textLeaveLogo={() => setCursorStyleFunction("onNavbar")}
            setShowFullScreenNav={setShowFullScreenNav}
            showFullScreenNav={showFullScreenNav}
          ></Navbar>

          {/* CURSOR */}
          <motion.div
            className="cursor"
            variants={returnCursorVariant(curPosition)}
            animate={curVar}
          />

          {/* MODAL */}
          {globalStates.modalIsOpen && (
            <section className="rodal__section">
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
                  className="rodal__parent rodal__flex-row"
                  onMouseEnter={() => {
                    dispatch(setCursorStyle("modalEnter"));
                  }}
                  onMouseLeave={() => {
                    dispatch(setCursorStyle("default"));
                  }}
                >
                  <div className="rodal__subsection rodal__subsection-title">
                    <h2 className="rodal__title">{rodalContent.title}</h2>
                    <h1
                      className="rodal__close-button"
                      onMouseEnter={() => {
                        dispatch(setCursorStyle("crossEnter"));
                      }}
                      onMouseLeave={() => {
                        dispatch(setCursorStyle("modalEnter"));
                      }}
                      onClick={() => {
                        dispatch(setIsModalOpen(false));
                        dispatch(setCursorStyle("default"));
                      }}
                    >
                      X
                    </h1>
                  </div>

                  <div className="rodal__subsection rodal__description">
                    <p>{rodalContent.descriontion}</p>
                  </div>
                  <div className="rodal__subsection rodal__tech-stack">
                    {getTechStackRender(rodalContent.tech)}
                  </div>
                  <div className="rodal__subsection">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rodalContent.hyperlink}
                      className="rodal__project-link"
                      onMouseEnter={() => {
                        dispatch(setCursorStyle("hyperLinkEnter"));
                      }}
                      onMouseLeave={() => {
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
          <section id="home" ref={homeRef} className="homepage">
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
                  </span>
                  .
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
            myref={aboutRef}
            aboutSectionInViewRef={aboutSectionInView_Ref}
            innerRef={inputRef}
            offset={offset}
            textEnter={() => setCursorStyleFunction("text")}
            textLeave={() => setCursorStyleFunction("default")}
          ></Section>

          {/* Projects Section */}
          <DarkSection
            textEnter={() => setCursorStyleFunction("cardEnter")}
            textLeave={() => setCursorStyleFunction("default")}
            projectsData={cardItem}
          ></DarkSection>

          {/* Interests Sections  */}
          <InterestSection
            contactRef={contactRef}
            innerRef={ref2}
            onMouseEnter={() => setCursorStyleFunction("tourchEnter")}
            onMouseLeave={() => setCursorStyleFunction("default")}
          ></InterestSection>

          <div
            className="h-[70rem] w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center"
            onMouseEnter={() => setCursorStyleFunction("superSmall")}
            onMouseLeave={() => setCursorStyleFunction("default")}
            style={{ cursor: "none" }}
          >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <TextHoverEffect text="AWSHAF" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
