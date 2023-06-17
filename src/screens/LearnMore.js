// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import "./LearnMore.css";
import "../App.css";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import {
  // makeCursorDefault,
  // textEnter,
  setCursorStyle,
  updateCursorPosition,
} from "../features/cursor/cursorSlice";

import AOS from "aos";
import "aos/dist/aos.css";

import returnCursorVariant from "../resources/cursorStyles.js";
import ScrollToTop from "../components/ScrollToTop";
// import Footer from "../components/Footer";
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
      name: "",
      company: "T-shirt e-commerce platform",
      companyHyperlink: "https://howuniversehowls.ca/",
      bullets: [
        "Lead the development of a robust e-commerce platform utilizing the PERN stack, facilitating seamless online purchases of t-shirts",
        "Integrate 3rd Party - Stripe, to accept all major payment methods in a secured transaction process to facilitate more customer trust",
        "Maintained transparent communication with clients to accommodate their feature requests and ensure client satisfaction",
        // "bullet point 5",
      ],
    },
  ];

  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState("");
  // console.log("currentUrl:", currentUrl);
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

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <FullScreenNav
        showFullScreenNav={showFullScreenNav}
        setShowFullScreenNav={setShowFullScreenNav}
      ></FullScreenNav>
      <div className="bg container learnMoreParent">
        <ScrollToTop />

        <Navbar
          onClickHandler={() => handleProjectsClick()}
          setShowFullScreenNav={setShowFullScreenNav}
          showFullScreenNav={showFullScreenNav}
          textEnterLogo={() => dispatch(setCursorStyle("logo"))}
          textLeaveLogo={() => dispatch(setCursorStyle("default"))}
        ></Navbar>

        <motion.div
          className="cursor"
          variants={returnCursorVariant(curPosition)}
          animate={curVar}
        />

        {!showFullScreenNav && (
          <section className="secondSection">
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

              <h2 className="jobTitle">Hands on Experience</h2>

              {/* <h3 className="company" data-aos="zoom-out">
            {bulletData[1].company}
          </h3> */}

              <a
                href={bulletData[1].companyHyperlink}
                className="company"
                data-aos="zoom-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bulletData[1].company}
              </a>
            </div>

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
          </section>
        )}
      </div>
    </div>
  );
};

export default LearnMore;

/* TODO:
    - DONE: Update padding/styles
    - DONE: AOS - animaiton on scroll (to mimic @Japanese Website clone)
      - appearing and vanishing
    - Add parallax on bullets and other element
    - Different cursor effect based on each hoveredOn element
*/
