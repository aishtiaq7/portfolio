// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import "./LearnMore.css";
import "../App.css";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import {
  setCursorStyle,
  updateCursorPosition,
} from "../features/cursor/cursorSlice";

import AOS from "aos";
import "aos/dist/aos.css";

import returnCursorVariant from "../resources/cursorStyles.js";
import ScrollToTop from "../components/ScrollToTop";
import FullScreenNav from "../components/FullScreenNav";

const LearnMore = (props) => {
  const curVar = useSelector((state) => state.cursor.cursorVariant);
  const curPosition = useSelector((state) => state.cursor.cursorPosition);
  const dispatch = useDispatch();

  const [showFullScreenNav, setShowFullScreenNav] = useState(false);
  const handleProjectsClick = (e) => {
    e.preventDefault();
    setShowFullScreenNav(true);
  };

  const bulletData = [
    {
      name: "Work Experience",
      company: "Pangenomic Health Corp.",
      companyHyperlink: "https://www.pangenomic.com/",
      bullets: [
        "Performed regression, functional, non-functional and unit tests using JUnit 5, to ensure the reliability and functionality of the RESTful API endpoints.",
        "Designed and implement the feed screen app that displayed a list of natural remedy options to its customers using React-Native to support cross-platform usage (iOS & Android).",
        "Created API endpoints in NodeJS backend that fetched from Cloud PostgreSQL to populate the multiple screens such as settings and events page.",
        "Developed strong communication skill and proficiency working between QA and design team, using tools such as JIRA, Slack & Bitbucket to streamline the whole development lifecycle.",
      ],
    },
    {
      name: "handsOnExperience",
      company: "T-shirt e-commerce platform",
      companyHyperlink: "https://howuniversehowls.ca/",
      bullets: [
        "Lead the development of a robust e-commerce platform utilizing the PERN stack, facilitating seamless online purchases of t-shirts",
        "Integrate 3rd Party - Stripe, to accept all major payment methods in a secured transaction process to facilitate more customer trust",
        "Maintained transparent communication with clients to accommodate their feature requests and ensure client satisfaction",
      ],
    },
    {
      name: "Work Experience",
      company: "Wave Business Intelligence.",
      companyHyperlink: "https://www.linkedin.com/company/wavebi/mycompany/",
      bullets: [
        "Redesigned and optimized a static website, implementing Next.js framework and server-side rendering techniques, resulting in a 40% increase in page load speed and improved user engagement.",
        "Utilized Storybook extensively to thoroughly test and validate components' functionality, responsiveness, and visual consistency across multiple platforms and devices, ensuring 100% bug-free deliverables.",
      ],
    },
  ];

  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState("");

  const doodleSectionRef = useRef(null);
  const [doodleSectionInView, setDoodleSectionInView] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      dispatch(
        updateCursorPosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    };
    window.addEventListener("mousemove", mouseMove);
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      once: false,
      mirror: true,
      delay: 100,
    });
    AOS.refresh();
    setCurrentUrl(window.location.href);

    // for DoodleSection:
    const handleScroll = () => {
      const { top } = doodleSectionRef.current.getBoundingClientRect();
      // console.clear();
      // console.log("===>", scrollPosition);
      // console.log("top:", top);
      // console.log(doodleSectionRef.current.getBoundingClientRect());

      // trigger DoodleSection to show on scroll position
      if (top >= -403 && top <= 150) {
        // console.log("User has scrolled to Section 3!");
        setDoodleSectionInView(true);
        dispatch(setCursorStyle("modalEnter"));
      } else if (top <= -441) {
        dispatch(setCursorStyle("hideCursor"));
      } else {
        setDoodleSectionInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* DOODLE SECTION */}
      <div className="doodleContainer">
        <section
          className={`LMrodalSection ${
            doodleSectionInView ? "doodleFSactive" : ""
          }`}
        >
          <div className="content">
          <br></br>
          <br></br>

            <p>I like dooodle, both on paper and the web.</p>
            <p>
              target is to bring a doodle right --- <span id="doodletarget">here</span> ---
              <br></br>
              <br></br>
            </p>
            <br></br>
            <p>
              I'm thrilled to share my journey of self-expression through the
              realm of <strong>digital art</strong> and{" "}
              <strong>software development</strong>. Welcome to my space, a
              digital canvas where I'm not just a developer, but an artist
              crafting with lines of code Beyond the screen, I'm deeply
              passionate about <strong>football</strong> and
              <strong> volleyball</strong>. The thrill of the game, the
              teamwork, and the pursuit of excellence on the field resonate with
              me as strongly as lines of code do in the virtual world.
            </p>
            <br></br>
            {/* <h4>{`did you realize that the only place you could select text is here? `}</h4> */}
          </div>
        </section>
      </div>

      <FullScreenNav
        showFullScreenNav={showFullScreenNav}
        setShowFullScreenNav={setShowFullScreenNav}
      ></FullScreenNav>

      <div className="bg container learnMoreParent">
        <ScrollToTop />

        {!doodleSectionInView && (
          <Navbar
            onClickHandler={() => handleProjectsClick()}
            setShowFullScreenNav={setShowFullScreenNav}
            showFullScreenNav={showFullScreenNav}
            textEnterLogo={() => dispatch(setCursorStyle("logo"))}
            textLeaveLogo={() => dispatch(setCursorStyle("default"))}
          ></Navbar>
        )}

        <motion.div
          className="cursor"
          variants={returnCursorVariant(curPosition)}
          animate={curVar}
        />

        {!showFullScreenNav && (
          <section
            className={`secondSection ${
              doodleSectionInView ? "doodleSectionStyles" : ""
            }`}
          >
            <div className="paraContainers globalTextStyles">
              <h2 className="jobTitle">Work Experience:</h2>
              <a
                href={bulletData[0].companyHyperlink}
                className="company"
                data-aos="zoom-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bulletData[0].company}
              </a>

              <div className="bulletContainer">
                {bulletData[0].bullets.map((bullet, index) => {
                  const offset = 100 + index * 50;
                  return (
                    <li
                      className="bullet"
                      data-aos="zoom-out-left"
                      data-aos-offset={offset}
                      key={bullet}
                      onMouseEnter={() => dispatch(setCursorStyle("text"))}
                      onMouseLeave={() => dispatch(setCursorStyle("default"))}
                    >
                      {bullet}
                    </li>
                  );
                })}
              </div>

              <a
                href={bulletData[2].companyHyperlink}
                className="company"
                data-aos="zoom-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bulletData[2].company}
              </a>

              <div className="bulletContainer">
                {bulletData[2].bullets.map((bullet, index) => {
                  const offset = 100 + index * 50;
                  return (
                    <li
                      className="bullet"
                      data-aos="zoom-out-left"
                      data-aos-offset={offset}
                      key={bullet}
                      onMouseEnter={() => dispatch(setCursorStyle("text"))}
                      onMouseLeave={() => dispatch(setCursorStyle("default"))}
                    >
                      {bullet}
                    </li>
                  );
                })}
              </div>

              <h2 className="jobTitle">Hands on Experience</h2>

              <a
                href={bulletData[1].companyHyperlink}
                className="company"
                data-aos="zoom-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bulletData[1].company}
              </a>

              <div className="bulletContainer">
                {bulletData[1].bullets.map((bullet, index) => {
                  const offset = 100 + index * 50;
                  return (
                    <li
                      className="bullet"
                      data-aos="zoom-out-left"
                      data-aos-offset={offset}
                      key={bullet}
                      onMouseEnter={() => dispatch(setCursorStyle("text"))}
                      onMouseLeave={() => dispatch(setCursorStyle("default"))}
                    >
                      {bullet}
                    </li>
                  );
                })}
              </div>

              {/* E D U C A T I O N */}
              <h2 className="jobTitle">Education</h2>

              <div className="educationContainer">
                <a
                  href="https://www.sfu.ca/"
                  className="company"
                  data-aos="zoom-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simon Fraser University
                </a>
                <div className="sfulogo">
                  <img
                    className="logoicon"
                    src={require("../resources/sfulogo.png")}
                    alt="sfulogo"
                  ></img>
                </div>
              </div>

              <div className="bulletContainer">
                <h3
                  className="bullet"
                  data-aos="zoom-out-left"
                  data-aos-offset={50}
                  onMouseEnter={() => dispatch(setCursorStyle("text"))}
                  onMouseLeave={() => dispatch(setCursorStyle("default"))}
                >
                  BSC In Applied Science
                </h3>
                <h3
                  className="bullet"
                  data-aos="zoom-out-left"
                  data-aos-offset={100}
                  onMouseEnter={() => dispatch(setCursorStyle("text"))}
                  onMouseLeave={() => dispatch(setCursorStyle("default"))}
                >
                  Major in Computer Science
                </h3>
              </div>
            </div>

            <div ref={doodleSectionRef} className="doodleSection">
              <p className="boldPara">My Doodle Section:</p>
              {/* <h3 className="bottomText">some bottom text</h3> */}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default LearnMore;

/* TODO:
    - Different cursor effect based on each hoveredOn element
      -> on hovering over job experience, show its timeline
    - Transition Groups
*/
