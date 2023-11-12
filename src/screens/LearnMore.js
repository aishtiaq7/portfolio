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

import anime from 'animejs';

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

    anime({
      targets: '#demo-svg path',
      strokeDashoffset: [anime.setDashoffset, 0,],
      easing: 'easeInOutQuad',
      duration: 2000,
      direction: 'normal',
      loop: true
    });

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
            <p>
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
              test
            </p>
            <svg id="demo-svg" width={1500} height={1000}>
              <path stroke="black" strokeWidth={4} fill="none" d="M496,155l9,2c6.9,28.38-12.42,71.478-20,97q-17,65.994-34,132-9.5,39-19,78h1c12.438-4.477,38.971-10.322,47-20,8.841-18.832,11.277-38.546,25-52,1.323-1.3,14.175-10.989,18-5,4,6.27-11.008,23.1-13,27-10.155,19.876-19.893,54.22-15,84,43.808-10.231,35.135-77.086,59-92l2,3c9.864,26.936-33.109,76.6,1,110,30.363-.91,48.523-44.953,59-67-23.35-32.158-6.543-134.906,35-135l7,4c16.592,44.788-10.619,91.566-18,128l1,1a127.944,127.944,0,0,0,42-7c-1.247-6.645-3.27-14.272,0-21,5.989-12.324,50.744-40.939,70-36v1q-0.5,2-1,4c-16.287,4.935-51.315,23.77-54,42,12.485,18.589,41.665,28.342,61,40l64-29q7.5-30,15-60c12.682-44.783,22.31-89.316,37-131,6.788-19.26,11.793-50.6,26-63h4l2,2c0.286,27.8-12.9,53.611-20,77q-15.5,60.995-31,122l-19,79,2-1c9.76-22.776,60.8-92,88-94,27.016,20.14-7.6,71.531,8,100h2c10.006,2.216,62.816-24.481,68-31,14.68-18.453,19.45-55.352,49-58l6,3c3.05,10.083,2.76,22.137,1,34l12-8,3,2c1.03,11.687-.92,36.656,7,42h3c30.92-11.578,82.04-107.847,97-142,6.79-15.5,10.65-40.414,22-52,5.61,0.645,4.62.516,7,4-18.21,55.326-37.47,112.468-51,173,43.89-1,104.28-12.428,144,2v4h-47c-24.76-6.67-64.65-.456-89,2v3c5.08,13.311-.1,30.944-4,42-9.89,28.054-32.67,108.475-50,125l-8-1c-6.69-14.194,3.06-36.829,7-51q14.505-57.5,29-115h-1c-7.73,2.557-18.17,2.608-24-1v-1c0.67-1.666,1.33-3.334,2-5l27-6q9-32,18-64h-1v2c-23.85,23.689-41.65,86.9-83,90-10.8-8.553-7.03-21.2-13-35-31.62,35.007-51.3,88.489-90,116-5.777-.872-7.41-2.441-11-5v-2c-5.27-19.908,23.648-64.826,30-83-17.99,11.406-41.174,33.422-69,27-20.078-27.274,5.69-63.279-3-98h-4c-18.162,17.934-34.117,39.979-48,62-10.782,17.1-23.013,50.875-42,59H821c-13.855-10.745-2.818-38.412-1-55l-50,26,13,21c7.713,31.363-21.259,46.048-38,54-22.813,10.836-56.039,15.922-65-11,8.674-26.378,37.266-45.7,60-58l-2-3c-19.6-6.285-36.066-21.481-51-33l-27,8-26,1c-7.044,22.5-65.726,112.367-95,62-5.686-9.783-4.843-24.717-7-38q-0.5,1-1,2c-13.306,13.115-16.769,30.207-42,32-19.091-12.229-15.27-36.6-11-62-7.543,1.44-45.942,17.253-49,22-15.46,28.752-15.834,79.842-25,114-4.472,16.666-6.544,44.96-26,31-6.732-42.717,24.879-98.873,29-143-35.2-2.419-57.643-11.754-82-24l-27,50L227,632c-4.419-.774-3.714-0.6-6-3l96-178c-13.109-4.367-24.629-11.294-40-14-34.231-6.027-49.122,19.425-72,25v-5l3-4c17.08-7.652,29.827-20,52-24,28.007-5.049,45.82,14.658,64,13,9.838-33.055,38.622-72.841,56-102C417.325,277.372,450.885,210.4,496,155Zm-7,28-51,77c-23.124,36.648-43.516,74.039-66,112-13.109,22.133-35.3,49.371-41,76,25.738,8.229,42.408,21.827,79,22,11.061-68.963,35.713-142.928,56-208C471.066,245.751,491.905,197.353,489,183ZM642,336c-10.836,14.154-45.2,78.948-22,105h1C623.749,428.563,655.414,351.336,642,336Zm410,61c-25.5,26.909-37.44,68.281-54,104l2-1q27.99-35.5,56-71C1055.21,420.387,1056.77,402.3,1052,397Zm105,60q-7.005,29.5-14,59h1C1146.51,507.381,1166.62,464.246,1157,457ZM749,492c-20.476,15.739-45.057,26.8-57,51,1.321,3.827,0,2.08,3,4,19.342,8.082,68.771-21.8,69-40C760.636,499.857,756.89,494.679,749,492Z"></path>
            </svg>
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
              <p className="boldPara">My Doodle Section:</p>
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
