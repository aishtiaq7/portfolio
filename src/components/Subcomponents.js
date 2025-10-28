import { useEffect, useState } from "react";
import "../App.css";
import "../components/Subcomponent.css";
import { useNavigate } from "react-router-dom";
// import AOS from "aos";

import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import {
  setIsModalOpen,
  setModalContent,
} from "../features/cursor/globalStatesSlice";
import { setCursorStyle } from "../features/cursor/cursorSlice";
// import AnimatedNumber from "animated-number-react";
import { useInView } from "react-intersection-observer";
import Vara from "vara";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CountUp from "react-countup";

export const Section = (props) => {
  const dispatch = useDispatch();
  const [btn1Clicked, setBtn1Clicked] = useState(false);
  gsap.registerPlugin(ScrollToPlugin);

  const options = { threshold: 0.6, triggerOnce: false };
  const [inViewRef, inView] = useInView(options);

  //vara handwriting for AWSHAF text
  const [AwshafRef, AwshafinView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // eslint-disable-next-line
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const fontsizing = screenWidth > 600 ? 40 : 17;
  useEffect(() => {
    if (AwshafinView) {
      const vara = new Vara(
        "#myVaraText",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            id: "line1",
            text: `Awshaf.`,
            fontSize: fontsizing,
            strokeWidth: 2,
            color: "black",
            duration: 1750,
            textAlign: "left",
            x: 10,
            y: 5,
            fromCurrentPosition: { x: true, y: true },
            autoAnimation: true,
            queued: true,
            delay: 850,
            letterSpacing: 0,
          },
        ]
      );
      vara.ready();
    }
  }, [AwshafinView, fontsizing]); // Reactivate effect when AwshafinView changes

  const parallaxSpeedValue = -0.205;

  return (
    <article
      id="about"
      className="about-section"
      ref={props.innerRef ? props.innerRef : ""}
    >
      <div className="scrollToHere" ref={props.myref}></div>
      <div
        className="second-section"
        ref={props.aboutSectionInViewRef ? props.aboutSectionInViewRef : ""}
      >
        <SectionBanner section={"About"} isLightTheme={false} />
        <div className="container">
          <div
            id="aboutSectionBorderBox"
            className="largeText"
            style={{
              border: "2px solid black",
              transform: `translateY(${props.offset * parallaxSpeedValue}px)`,
            }}
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}
          >
            <div className="greetingsTitle">
              <h3
                data-aos="zoom-in-left"
                data-aos-once="false"
                data-aos-offset={185}
                data-aos-duration={475}
              >
                "hello"
              </h3>
            </div>

            <div className="des">
              <h3 ref={inViewRef}>
                <br></br>
                My name is{" "}
                <span
                  className="AwshafContent"
                  id="myVaraText"
                  ref={AwshafRef}
                  key={AwshafinView ? "visible" : "hidden"} // Change key based on visibility
                ></span>
                <br></br>I would like to describe myself as a collaborative &
                solution-driven software developer with{" "}
                {inView ? (
                  <CountUp end={4} duration={3.5} useEasing={false} />
                ) : (
                  <span>4</span> // Display 4 for SERP when not in view
                )}
                + years of experience in full-stack development & cloud
                computing. I graduated from Simon Fraser University with a
                bachelor's degree in computer science and currently working as
                an Instructor for {" "}
                <span className="bold">
                  <a
                    className="bold"
                    href="https://ciccc.ca/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Cornerstone
                  </a>
                </span>{" "}International College teaching Web Application Development and also as a Software Developer for {" "}
                <span className="bold">
                  <a
                    className="bold"
                    href="https://buildsmartr.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    BuildSmartr
                  </a>
                </span>.
              </h3>
              <br></br>
              <h3>
                As a co-founder of{" "}
                <span className="bold">
                  <a
                    className="bold"
                    href="https://www.digitecinnovation.ca/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Digitec Innovation
                  </a>
                </span>
                , I've led the development of various projects which have honed
                my abilities in orchestrating B2B & B2C relationships, guiding
                the architectural design of sophisticated web solutions, and
                leading projects from strategic inception through to successful
                deployment and iterative improments.
                <br></br>
                <br></br>
                My passion lies in devising software solutions that streamline
                and enrich everyday experiences, and my knowledge of programming
                and web development has empowered me to express my creativity
                and skills to achieve this goal!
                <br></br>
                <br></br>
                Join me on this digital journey as we explore software
                innovation & my narrative.
              </h3>
            </div>

            <div
              className="btnConainter"
              data-aos="zoom-in-left"
              data-aos-once="false"
              data-aos-offset={10}
              data-aos-duration={275}
            >
              <button
                className={`coloredBtn ${
                  btn1Clicked ? "clicked_coloredBtn" : ""
                }`}
                onClick={() => {
                  setBtn1Clicked(true);
                  const element = document.getElementById("projects");
                  gsap.to(window, {
                    duration: element.id !== "contact" ? 1.5 : 2.1, // Adjust duration as needed
                    scrollTo: {
                      y: element, // Scroll to the target section
                      offsetY: -35, // Adjust offset if needed
                      autoKill: false, // Automatically kill the tween if user scrolls manually
                    },
                    // ease: "power2.inOut"
                    ease: "expoScale",
                  });
                }}
                onMouseEnter={() => {
                  dispatch(setCursorStyle("learnMore"));
                }}
                onMouseLeave={() => {
                  dispatch(setCursorStyle("default"));
                }}
              >
                Let's Begin
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const DarkSection = (props) => {
  const data = props.projectsData;
  const [btn2Clicked, setBtn2Clicked] = useState(false);

  const listItems = data.map((item, index) => {
    return (
      <Card
        key={item.id}
        mouseEnterEvent={props.textEnter}
        mouseLeaveEvent={props.textLeave}
        id={index}
        projectName={item.projectName}
        hyperlink={item.hyperlink}
        des={item.des}
        iconsList={item.iconsList}
      ></Card>
    );
  });

  const dispatch = useDispatch();

  return (
    <section id="projects" className="dark-section ">
      <SectionBanner section={"Projects"} isLightTheme={true} />

      <div className="container">
        <div className="projectsContent largeText">
          <h1 className="greetingsTitle">
            Here are some of my <u>running</u> projects...
          </h1>
          <p className="projectsSubhead">
            Countless problems call for varying stacks, and the ability to
            adjust successfully hinges on gaining expertise with each.
          </p>

          <div className="cardsContainer">{listItems}</div>

          <button
            className={`learnMoreBtn ${
              btn2Clicked ? "clicked_learnMoreBtn" : ""
            }`}
            onClick={() => {
              setBtn2Clicked(true);
              const element = document.getElementById("interests");
              // .scrollIntoView({ behavior: "smooth" });
              gsap.to(window, {
                duration: element.id !== "contact" ? 1.5 : 2.1, // Adjust duration as needed
                scrollTo: {
                  y: element, // Scroll to the target section
                  offsetY: 50, // Adjust offset if needed
                  autoKill: false, // Automatically kill the tween if user scrolls manually
                },
                // ease: "power2.inOut"
                ease: "expoScale",
              });
            }}
            onMouseEnter={() => {
              dispatch(setCursorStyle("learnMoreContrast"));
            }}
            onMouseLeave={() => {
              dispatch(setCursorStyle("default"));
            }}
            data-aos="zoom-in-left"
            data-aos-once="false"
            data-aos-offset={10}
            data-aos-duration={275}
          >
            Learn More ?
          </button>
        </div>
      </div>
    </section>
  );
};
const getIconHTML = (icon, id) => {
  return (
    <img
      key={icon}
      className="icon"
      src={require(`../resources/${icon}.png`)}
      alt={id}
    ></img>
  );
};

export const Card = (props) => {
  const renderIcons = (iconsList, id) => {
    return iconsList.map((icon) => {
      return getIconHTML(icon, id);
    });
  };
  // eslint-disable-next-line
  const globalStates = useSelector((state) => state.globalStates);
  // eslint-disable-next-line
  const dispatch = useDispatch();

  return (
    <div
      key={props.id}
      className="card"
      onMouseEnter={props.mouseEnterEvent}
      onMouseLeave={props.mouseLeaveEvent}
      onClick={() => {
        dispatch(setIsModalOpen(!globalStates.modalIsOpen));
        dispatch(
          setModalContent({
            title: props.projectName,
            descriontion: props.des,
            tech: props.iconsList,
            hyperlink: props.hyperlink,
          })
        );
      }}
    >
      <div className={`iconContainer delay-${props.id % 3}s`}>
        {renderIcons(props.iconsList, props.id)}
      </div>
      <div className="cardTitle">
        <h5>{props.projectName}</h5>
      </div>
      <div className="cardDes">
        <p>
          {props.des.length > 150
            ? `${props.des.substring(0, 200)}...`
            : props.des}
        </p>
      </div>
    </div>
  );
};

export const SectionBanner = (props) => {
  const isLightTheme = props.isLightTheme;
  const sectionTitle = props.section;
  return (
    <div className={`section-banner `}>
      <div
        className={`ribbon ${isLightTheme ? "ribbon-light" : "ribbon-dark"}`}
      >
        <h4 className="about-title">{sectionTitle}</h4>
      </div>
    </div>
  );
};

export const InterestSection = (props) => {
  const torchContent = [
    "I love to play<br>FOOTBALL & VOLLEYBALL,",
    "develop software,",
    "build trust <br>&<br> meaningful connections.",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section id="interests" ref={props.innerRef}>
      <div className="interestSection">
        <div className="projectsBanner">
          <SectionBanner section="Hobbies" isLightTheme={false} />
        </div>

        <div className="largeText" id="interestBox">
          <div className="container">
            <h1 className="greetingsTitle">Interests & Hobbies</h1>

            <br></br>
            <br></br>
            <p>
              Well, I do many things, but how much do you want to know me{" "}
              <span className="shaky-question">?</span>
            </p>

            {/* <h5>
              you first need to know{" "}
              <div className="me-box">
                <h4>me</h4>
              </div>
            </h5> */}

            <div className="touchSection">
              {torchContent.map((sen) => (
                <p
                  key={sen}
                  className="hover-objects"
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                  dangerouslySetInnerHTML={{ __html: sen }}
                />
              ))}

              <div
                data-aos="zoom-in-left"
                data-aos-once="false"
                data-aos-offset={10}
                data-aos-duration={275}
              >
                <button
                  className="coloredBtn finalBtn"
                  onClick={() => navigate("/learnmore")}
                  onMouseEnter={() => dispatch(setCursorStyle("learnMore"))}
                  onMouseLeave={() => dispatch(setCursorStyle("default"))}
                >
                  Learn More?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={props.contactRef}
        className="invisibleRef"
        id="scrollToContact"
      />
    </section>
  );
};
