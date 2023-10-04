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
      category: "Work Experience",
      company: "Digitec Innovation",
      companyHyperlink: "https://www.digitecinnovation.ca/",
      bullets: [
        "Co-founded and directed Digitec Innovation, a dynamic software firm specializing in web development and cloud technologies to digitalize small-to-medium sized businesses.",
        "Designed and implement the feed screen app that displayed a list of natural remedy options to its customers using React-Native to support cross-platform usage (iOS & Android).",
        "Created API endpoints in NodeJS backend that fetched from Cloud PostgreSQL to populate the multiple screens such as settings and events page.",
        "Developed strong communication skill and proficiency working between QA and design team, using tools such as JIRA, Slack & Bitbucket to streamline the whole development lifecycle.",
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

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const filteredWorkExperience = bulletData
  //   .filter((item) => item.category === "Work Experience")
  //   .map((item) => item);

  // console.log(filteredWorkExperience);

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
              {/* "doodle section",  */}
              <br></br>a place where i can paint my ideas, from the pages of my
              notebook onto a digital canvas.
              {/* my journey of self-expression through digital art & software development */}
              {/* self-expression through the realm of <strong>digital art</strong>{" "} */}
              {/* and <strong>software development</strong>.  */}
              <br></br>
              here I wear the hat not only of a developer but also an artist,
              crafting with lines of code & passion.
              {/* <br></br> 
              Beyond the screen, I'm deeply
              passionate about <strong>football</strong> and
              <strong> volleyball</strong>. The thrill of the game, the
              teamwork, and the pursuit of excellence on the field resonate with
              me as strongly as lines of code do in the virtual world. */}
              <br></br>
              <br></br>
              target is to bring a doodle right ---{" "}
              <span id="doodletarget">here</span> ---
            </p>
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
              {/* <h3 className="bottomText">some bottom text</h3> */}
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
    - map implementation, refactor code. 
    - Different cursor effect based on each hoveredOn element
      -> on hovering over job experience, show its timeline
    - Transition Groups
*/
