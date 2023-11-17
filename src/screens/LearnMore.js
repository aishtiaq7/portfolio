// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState, useCallback } from "react";
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

import Vara from "vara";
import { useInView } from "react-intersection-observer";

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
      category: "Work Experience",
      company: "Digitec Innovation",
      companyHyperlink: "https://www.digitecinnovation.ca/",
      bullets: [
        "Co-founded and directed Digitec Innovation, a dynamic software firm specializing in web development and cloud technologies to digitalize small-to-medium sized businesses.",
        "Designed and implement the feed screen app that displayed a list of natural remedy options to its customers using React-Native to support cross-platform usage (iOS & Android).",
        "Created API endpoints in NodeJS backend that fetched from Cloud PostgreSQL to populate the multiple screens such as settings and events page.",
      ],
    },
    {
      category: "Work Experience",
      company: "Wave Business Intelligence.",
      companyHyperlink: "https://www.wavebi.com.ar/",
      bullets: [
        "Transformed static HTML/CSS/JavaScript pages into Next.js web apps with support for each page manipulation thorough props and modularized CSS resulting 60% increase in both maintainability and performance.",
        "Utilized Storybook extensively to thoroughly test and validate components' functionality, responsiveness, and visual consistency across multiple platforms and devices, ensuring 100% bug-free deliverables.",
      ],
    },
    {
      category: "Work Experience",
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
      category: "Digitec Projects",
      company: "Clipping Path Service ASIA",
      companyHyperlink: "https://www.clippingpathserviceasia.com/",
      bullets: [
        "Built responsive, reusable components in NextJS using props and modularized CSS facilitating their utilization across multiple pages within the application and 40% increase in scalability.",
        "Implemented a secure NodeMailer API endpoint within server-side Next.js components for secured email transmission with large attachments, facilitating seamless communication and better user experience.",
      ],
    },
    {
      category: "Digitec Projects",
      company: "T-shirt e-commerce platform",
      companyHyperlink: "https://howuniversehowls.ca/",
      bullets: [
        "Lead the development of a robust e-commerce platform utilizing the PERN stack, facilitating seamless online purchases of t-shirts",
        "Integrate 3rd Party - Stripe, to accept all major payment methods in a secured transaction process to facilitate more customer trust",
        "Maintained transparent communication with clients to accommodate their feature requests and ensure client satisfaction",
      ],
    },
  ];

  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState("");

  const doodleSectionRef = useRef(null);
  const [doodleSectionInView, setDoodleSectionInView] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  const initializeVara = useCallback(() => {
    if (inView) {
      const currentDate = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // console.log("Current Time:", currentDate);

      const vara = new Vara(
        "#myVaraText",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
        [
          {
            id: "line1", // String or integer, for if animations are called manually or when using the get() method. Default is the index of the object.
            text: `${currentDate},`, // String, text to be shown
            fontSize: 40, // Number, size of the text
            strokeWidth: 1, // Width / Thickness of the stroke
            color: "black", // Color of the text
            duration: 1500, // Number, Duration of the animation in milliseconds
            textAlign: "left", // String, text align, accepted values are left,center,right
            x: 10, // Number, x coordinate of the text
            y: 40, // Number, y coordinate of the text
            fromCurrentPosition: {
              // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
              x: true, // Boolean
              y: true, // Boolean
            },
            autoAnimation: true, // Boolean, Whether to animate the text automatically
            queued: true, // Boolean, Whether the animation should be in a queue
            delay: 1250, // Delay before the animation starts in milliseconds
            /* Letter spacing can be a number or an object, if number, the spacing will be applied to every character.
              If object, each letter can be assigned a different spacing as follows,
              letterSpacing: {
                  a: 4,
                  j: -6,
                  global: -1
              }
              The global property is used to set spacing of all other characters
              */
            letterSpacing: 0,
          },
          {
            id: "line2", 
            text: `thats today.`,
            fontSize: 40, 
            strokeWidth: 1, 
            color: "black", 
            duration: 1500, 
            textAlign: "left", 
            x: 55, 
            y: -10, 
            fromCurrentPosition: {
              x: true, 
              y: true, 
            },
            autoAnimation: true, 
            queued: true, 
            delay: 1150, 
            letterSpacing: -1
          },
          {
            id: "line3", 
            text: `A delightful day when you visited my page and followed through my narrative i created.`, 
            fontSize: 40, 
            strokeWidth: 1, 
            color: "black",
            duration: 3300, 
            textAlign: "left", 
            x: 10, 
            y: 55, 
            fromCurrentPosition: {
              x: true, 
              y: true, 
            },
            autoAnimation: true, 
            queued: true, 
            delay: 750,
            letterSpacing: 0,
          },
          {
            id: "line4", 
            text: `Hope you enjoyed this digital experience.`, 
            fontSize: 40, 
            strokeWidth: 1, 
            color: "black", 
            duration: 2500, 
            textAlign: "left", 
            x: 10, 
            y: 20, 
            fromCurrentPosition: {
              x: true, 
              y: true, 
            },
            autoAnimation: true,
            queued: true, 
            delay: 1250, 
            letterSpacing: 0,
          },
          {
            id: "line4",
            text: `Yours truly,`,
            fontSize: 40, 
            strokeWidth: 1, 
            color: "black",
            duration: 1800, 
            textAlign: "left", 
            x: 10,
            y: 50,
            fromCurrentPosition: {
              x: true,
              y: true,
            },
            autoAnimation: true, 
            queued: true,
            delay: 1000,
          },
          {
            id: "line4",
            text: `Awshaf Ishtiaque`,
            fontSize: 40, 
            strokeWidth: 1.8, 
            color: "black",
            duration: 2900, 
            textAlign: "left", 
            x: 10,
            y: 38,
            fromCurrentPosition: {
              x: true,
              y: true,
            },
            autoAnimation: true, 
            queued: true,
            delay: 1000,
          }
        ]
      );
      vara.ready();

     
    }
  }, [inView]);

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
      if (top >= -403 && top <= 150) {
        setDoodleSectionInView(true);
        dispatch(setCursorStyle("modalEnter"));
      } else if (top <= -441) {
        dispatch(setCursorStyle("hideCursor"));
      } else {
        setDoodleSectionInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    initializeVara();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initializeVara]);

  return (
    <div>
      {/* DOODLE SECTION */}
      <div className="doodleContainer">
        <section
          className={`LMrodalSection ${
            doodleSectionInView ? "doodleFSactive" : ""
          }`}
        >
          <div className="content" id="myVaraText" ref={ref}>
            {/* <p> */}
            {/* <br></br>
              In this section, I aim to bring my thoughts and imagination into a free flowing space. 
              <br></br>
              Much like the pages of my <strong>notebook</strong>, i aspire to draw, scribble, and sketch ideas that roam freely in my mind's landscape. 
              <br></br>
              In doing so, I can transcend the confines of paper and continue to  <span id="doodletarget">paint</span> my thoughts without the constraints of ink, space & time. 
              <br></br>
              I want to leave behind my self-expression in the form of digital art and software development.
              <br></br>
              
              <br></br>
              <br></br> */}
            {/* test */}
            {/* </p> */}
            {/* <div id="myVaraText"></div> */}
          </div>
          <div id="target2"></div>
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
              <h2 className="jobTitle">Work Experience</h2>

              {bulletData
                .filter((item) => item.category === "Work Experience")
                .map((singleBullet, index) => {
                  return (
                    <WorkExperienceItem
                      key={singleBullet.company}
                      company={singleBullet.company}
                      companyHyperlink={singleBullet.companyHyperlink}
                      bullets={singleBullet.bullets}
                    />
                  );
                })}
              <h2 className="jobTitle">Digitec Projects</h2>
              {bulletData
                .filter((item) => item.category === "Digitec Projects")
                .map((singleBullet, index) => {
                  return (
                    <WorkExperienceItem
                      key={singleBullet.company}
                      company={singleBullet.company}
                      companyHyperlink={singleBullet.companyHyperlink}
                      bullets={singleBullet.bullets}
                    />
                  );
                })}

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
              <p className="boldPara" ref={ref}>
                My Doodle Section:
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const WorkExperienceItem = ({ company, companyHyperlink, bullets }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <a
        href={companyHyperlink}
        className="company"
        data-aos="zoom-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        {company}
      </a>

      <div className="bulletContainer">
        {bullets.map((bullet, index) => {
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
    </div>
  );
};

export default LearnMore;

/* TODO:
    - Different cursor effect based on each hoveredOn element
      -> on hovering over job experience, show its timeline
    - Transition Groups
*/
