// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState, useCallback } from "react";
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
import { Helmet } from "react-helmet-async";
import "./LearnMore.css";
import "../App.css";

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
      company: "Cornerstone International College",
      companyHyperlink: "https://ciccc.ca/wps-members/awshaf-ishtiaque/",
      bullets: [
        "Developed and instructed a comprehensive programming curriculum for over 40 students, spanning basic syntax to advanced full-stack development, incorporating key concepts like OOP and Big O Notation, which enhanced learning outcomes.",
        "Regularly updated and validated educational content to include cutting-edge programming practices in JavaScript and TypeScript, ensuring course relevancy and student preparedness for modern tech environments.",
        "Enhanced student engagement and performance by implementing innovative online learning modules and leveraging data analytics, resulting in a 20% improvement in assessment scores.",
      ],
    },
    {
      category: "Work Experience",
      company: "Digitec Innovation",
      companyHyperlink: "https://www.digitecinnovation.ca/",
      bullets: [
        "Co-founded Digitec Innovation to provide custom-tailored web services, with a focus on client-centric development and market-driven solutions.",
        "Led the end-to-end development of feature requests, starting from the creation of RESTful APIs and culminating in frontend rendering, resulting in a 20% reduction in time-to-market for client requested features.",
        "Led the implementation of CI/CD pipeline shortening the development cycle and automated testing before merges.",
        "Efficiently managed client relationships using an agile-waterfall methods, to address evolving client needs resulting in higher client satisfaction & company recognition.",
      ],
    },
    {
      category: "Work Experience",
      company: "Wave Business Intelligence.",
      companyHyperlink: "https://www.wavebi.com.ar/",
      bullets: [
        "Upgraded legacy HTML/CSS/JavaScript pages to interactive Next.js web apps streamlining code reusability and enforcing a cohesive design framework, resulting in a notable 27% improvement in conversion rates.",
        "Implemented a dynamic caching solution that prioritized the efficient loading of high-bandwidth content, like images & videos, reducing resource load times by 15% offering an uninterrupted & rapid browsing experience.",
        "Utilized StorybookJS to extensively test and visualize React reusable components, their functionality & responsiveness across multiple devices and dimension, ensuring 100% bug-free deliverables.",
      ],
    },
    {
      category: "Work Experience",
      company: "Pangenomic Health Corp.",
      companyHyperlink: "https://www.pangenomic.com/",
      bullets: [
        "Integrated Strapi CMS to optimize content management workflows resulting in a 26% increase in editorial efficiency and content production velocity.",
        "Collaborated with the UI/UX team to gather specifications and developed the Feed screen using React-Native functional components, ensuring cross-platform functionality for both Android and iOS.",
        "Defined API endpoints in NodeJS backend to fetch data from Cloud PostgreSQL asynchronously and cache it locally to reduce page load times by 25% for the Feed & Settings screen.",
        "Built comprehensive API test plans, identifying critical bugs on emulators & mobile devices before production.",
      ],
    },
    {
      category: "Digitec Projects",
      company: "Fashion E-Boutique",
      companyHyperlink: "https://howuniversehowls.ca/",
      bullets: [
        "Lead the development of a robust e-commerce platform utilizing the PERN stack, facilitating seamless online purchases of t-shirts",
        "Integrate 3rd Party - Stripe, to accept all major payment methods in a secured transaction process to facilitate more customer trust",
        "Maintained transparent communication with clients to accommodate their feature requests and ensure client satisfaction",
      ],
    },
    {
      category: "Digitec Projects",
      company: "Prestigious Power Washing",
      companyHyperlink: "https://www.prestigiouspressure.ca/",
      bullets: [
        "Orchestrate the development of the company portfolio website from its legacy existing Wix website",
        "Apply SEO techniques to increase customer retention rate by 35%.",
      ],
    },
    {
      category: "Digitec Projects",
      company: "Rudolph Christmas Lights",
      companyHyperlink: "https://www.rudolphchristmaslights.ca/",
      bullets: [
        "Designed and developed a visually stunning Next.js website for Rudolph Christmas Lights, incorporating immersive parallax scrolling animations to enhance user engagement. The site features dynamic content sections that react to user scrolling, creating a memorable browsing experience tailored for the festive season.",
        "SERP managed, Google Analytics, semantic html and many more techniques to bring the website in the first 10 Google search resutls.",
      ],
    },
    {
      category: "Digitec Projects",
      company: "Clipping Path Service ASIA",
      companyHyperlink: "https://www.clippingpathserviceasia.com/",
      bullets: [
        "Built responsive, reusable components in NextJS using props and modularized CSS facilitating their utilization across multiple pages enhancing code reusability & time to deploy new webpages by 30%.",
        "Implemented a secure NodeMailer API endpoint within server-side Next.js components for secured email transmission with large attachments, facilitating seamless communication and better user experience.",
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

  // eslint-disable-next-line
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //                             lg  sm    - screens
  const spacing = screenWidth > 600 ? 45 : 22;
  const fontsizing = screenWidth > 600 ? 40 : 29;

  const initializeVara = useCallback(() => {
    if (inView) {
      let currentDate = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      currentDate = currentDate.replace(",", "");

      const vara = new Vara(
        "#myVaraText",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
        // "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
        [
          {
            id: "line1", // String or integer, for if animations are called manually or when using the get() method. Default is the index of the object.
            text: `Today is ${currentDate},`, // String, text to be shown
            fontSize: fontsizing, // Number, size of the text
            strokeWidth: 1, // Width / Thickness of the stroke
            color: "black", // Color of the text
            duration: 1750, // Number, Duration of the animation in milliseconds
            textAlign: "left", // String, text align, accepted values are left,center,right
            x: 10, // Number, x coordinate of the text
            y: spacing, // Number, y coordinate of the text
            fromCurrentPosition: {
              // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
              x: true, // Boolean
              y: true, // Boolean
            },
            autoAnimation: true, // Boolean, Whether to animate the text automatically
            queued: true, // Boolean, Whether the animation should be in a queue
            delay: 850, // Delay before the animation starts in milliseconds
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
            id: "line3",
            text: `On this date, you explored my page and delved into the narrative I've crafted.`,
            fontSize: fontsizing,
            strokeWidth: 1,
            color: "black",
            duration: 3300,
            textAlign: "left",
            x: 10,
            y: spacing,
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
            text: `I hope you found this digital journey engaging.`,
            fontSize: fontsizing,
            strokeWidth: 1,
            color: "black",
            duration: 2500,
            textAlign: "left",
            x: 10,
            y: spacing / 1.8,
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
            text: `Feel free to shoot me a message on Linkedin or email to let me know your thoughts!`,
            fontSize: fontsizing,
            strokeWidth: 1,
            color: "black",
            duration: 2500,
            textAlign: "left",
            x: 10,
            y: spacing / 1.8,
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
            fontSize: fontsizing,
            strokeWidth: 1,
            color: "black",
            duration: 1350,
            textAlign: "left",
            x: 10,
            y: spacing,
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
            fontSize: fontsizing,
            strokeWidth: 1.8,
            color: "black",
            duration: 2900,
            textAlign: "left",
            x: 10,
            y: spacing + 10,
            fromCurrentPosition: {
              x: true,
              y: true,
            },
            autoAnimation: true,
            queued: true,
            delay: 1000,
          },
        ]
      );
      vara.ready();
    }
  }, [inView, fontsizing, spacing]);

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
      offset: 30,
      duration: 500,
      easing: "ease-in-sine",
      once: true,
      mirror: false,
      delay: 25,
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
       <Helmet>
        <title>Learn More | Awshaf Ishtiaque</title>
        <meta name="description" content="Learn more about my journey as a Web Developer, Instructor at CICCC, and Co-Founder of Digitec Innovation and his educational background." />
        <meta name="keywords" content="Learn More, Awshaf, Web Developer, Instructor, CICCC, Digitec Innovation" />
        <link rel="canonical" href="https://awshaf.com/learnmore" />
        <meta property="og:title" content="Learn More | Awshaf Ishtiaque" />
        <meta property="og:description" content="Discover more about Awshaf's journey and expertise." />
        <meta property="og:url" content="https://awshaf.com/learnmore" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* DOODLE SECTION */}
      <div className="doodleContainer">
        <section
          className={`LMrodalSection ${
            doodleSectionInView ? "doodleFSactive" : ""
          }`}
        >
          <div className="content" id="myVaraText" ref={ref}></div>
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
              <div className="bigRow">
                <h2 className="jobTitle">Work Experience</h2>
                {bulletData
                  .filter((item) => item.category === "Work Experience")
                  .map((singleBullet, index) => {
                    return (
                      <WorkExperienceItem
                        category={singleBullet.category}
                        key={singleBullet.company}
                        company={singleBullet.company}
                        companyHyperlink={singleBullet.companyHyperlink}
                        bullets={singleBullet.bullets}
                      />
                    );
                  })}
              </div>

              <div className="bigRow">
                <h2 className="jobTitle">Digitec Projects</h2>
                {bulletData
                  .filter((item) => item.category === "Digitec Projects")
                  .map((singleBullet, index) => {
                    return (
                      <WorkExperienceItem
                        category={singleBullet.category}
                        key={singleBullet.company}
                        company={singleBullet.company}
                        companyHyperlink={singleBullet.companyHyperlink}
                        bullets={singleBullet.bullets}
                      />
                    );
                  })}
              </div>

              {/* E D U C A T I O N */}
              <div className="bigRow">
                <h2 className="jobTitle">Education</h2>

                <div className="educationContainer">
                  <a
                    id="schoolName"
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

                <div className="bulletContainer eduBullet">
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

const WorkExperienceItem = ({
  company,
  companyHyperlink,
  bullets,
  category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="EachBulletObject ">
      <div className="parentBulletContainer">
        <div className="companyRow">
          <a
            href={companyHyperlink}
            className="company"
            // data-aos="zoom-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </div>

        <div className="bulletContainer">
          {bullets.map((bullet, index) => {
            const offset = 0 + index * 15;
            // const offset = 0;
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
    </div>
  );
};

export default LearnMore;

/* TODO:
    - Different cursor effect based on each hoveredOn element
      -> on hovering over job experience, show its timeline
    - Transition Groups
*/
