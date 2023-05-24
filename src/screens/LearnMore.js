// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
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
// import Footer from "../components/Footer";

const LearnMore = (props) => {
  const curVar = useSelector((state) => state.cursor.cursorVariant);
  const curPosition = useSelector((state) => state.cursor.cursorPosition);
  const dispatch = useDispatch();

  const bulletData = [
    {
      name: "Work Experience",
      company: "Pangenomic Health Corp.",
      bullets: [
        "Performed regression, functional, non-functional and unit tests using JUnit 5, to ensure the reliability and functionality of the RESTful API endpoints.",
        "Designed and implement the feed screen app that displayed a list of natural remedy options to its customers using React-Native to support cross-platform usage (iOS & Android).",
        "Created API endpoints in NodeJS backend that fetched from Cloud PostgreSQL to populate the multiple screens such as settings and events page.",
        "Developed strong communication skill and proficiency working between QA and design team, using tools such as JIRA, Slack & Bitbucket to streamline the whole development lifecycle.",
      ],
    },
    {
      name:'',
      company: "T-shirt E-commerce",
      bullets :[
        "bullet point 1",
        "bullet point 2",
        "bullet point 3",
        "bullet point 4",
      ]
    }
  ];

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

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg container learnMoreParent">
      <ScrollToTop/>

      <Navbar
        setShowFullScreenNav={() => {}}
        showFullScreenNav={() => {}}
        textEnterLogo={() => dispatch(setCursorStyle("logo"))}
        textLeaveLogo={() => dispatch(setCursorStyle("default"))}
      ></Navbar>

      <motion.div
        className="cursor"
        variants={returnCursorVariant(curPosition)}
        animate={curVar}
      />

      <section className="secondSection">
        <div className="paraContainers globalTextStyles">
          <h2 className="jobTitle">Work Experience:</h2>

          <h3 className="company" data-aos="zoom-out">
            {bulletData[0].company}
          </h3>

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

          <h2 className="jobTitle">Hobies & Interests:</h2>

          <h3 className="company" data-aos="zoom-out">
            {bulletData[1].company}
          </h3>
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
    </div>
  );
};

export default LearnMore;

/* TODO:
    - Update padding/styles
    - AOS - animaiton on scroll (to mimic @Japanese Website clone)
      - appearing and vanishing
    - Add parallax on bullets and other element
    - Different cursor effect based on each hoveredOn element
    -
*/
