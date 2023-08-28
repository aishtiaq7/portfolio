import { useEffect, useState } from "react";
import "../App.css";
import "../components/Subcomponent.css";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import {
  setIsModalOpen,
  setModalContent,
} from "../features/cursor/globalStatesSlice";
import { setCursorStyle } from "../features/cursor/cursorSlice";
import AnimatedNumber from "animated-number-react";
import { useInView } from 'react-intersection-observer';

export const Section = (props) => {
  const [btn1Clicked, setBtn1Clicked] = useState(false);

  const options = { threshold: 0.6, triggerOnce: false, };
  const [inViewRef, inView] = useInView(options);

  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
  }, []);

  const formatValue = (value) => Math.round(value); 

  const parallaxSpeedValue = -0.205;
  return (
    <article
      id="about"
      className="about-section"
      ref={props.innerRef ? props.innerRef : ""}
    >
      <div className="second-section">
        <SectionBanner section={"About"} isLightTheme={false} />

        <div
          className="container"
          onMouseEnter={props.textEnter}
          onMouseLeave={props.textLeave}
        >
          <div
            className="largeText"
            style={{
              marginTop: "8rem",
              border: "2px solid black",
              transform: `translateY(${props.offset * parallaxSpeedValue}px)`,
            }}
          >
            <div className="greetingsTitle">
              <h3
                data-aos="zoom-in-left"
                data-aos-once="false"
                data-aos-offset={185}
                // data-aos-offset={300}
                data-aos-duration={475}
              >
                "hello"
              </h3>
            </div>

            <div className="des">
              <h3 ref={inViewRef} >
                <br></br>
                xxx <span className="bold">Awshaf</span>,<br></br>
                I'm a computer science graduate with{" "}
                {/* <AnimatedNumber value={3} formatValue={formatValue} duration={2000} delay={1000} /> */}
                <AnimatedNumber value={inView ? 3 : 0} formatValue={formatValue} duration={1700}  />
                + years of
                experience building & deploying web apps.
              </h3>
              <br></br>
              <h3>
                My fascination lies in devising software solutions that enhance
                the ease of daily activities using cloud solutions.
                <br></br>
                By harnessing my programming and web development knowledge, I've
                found a creative outlet to pursue this aspiration.
                <br />
                <br />I specialize in leveraging <u>React</u> and <u>NodeJS</u>{" "}
                based web stacks to create digital experiences that leave an
                impact! <br></br>
                <br></br>
                Join me on this digital voyage where we explore software
                innovation and my narrativey.
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
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={() => {
                  dispatch(setCursorStyle("learnMore"));
                }}
                onMouseLeave={() => {
                  dispatch(setCursorStyle("default"));
                }}
              >
                Learn More ?
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

  const listItems = data.map((item) => {
    return (
      <Card
        key={item.id}
        mouseEnterEvent={props.textEnter}
        mouseLeaveEvent={props.textLeave}
        id={item.projecID}
        projectName={item.projectName}
        hyperlink={item.hyperlink}
        des={item.des}
        iconsList={item.iconsList}
      ></Card>
    );
  });

  const dispatch = useDispatch();

  return (
    <section id="projects" className="dark-section largeText">
      <SectionBanner section={"Projects"} isLightTheme={true} />

      <div className="container">
        <div className="projectsContent">
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
              document
                .getElementById("interests")
                .scrollIntoView({ behavior: "smooth" });
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
      <div className="iconContainer">
        {renderIcons(props.iconsList, props.id)}
      </div>
      <div className="cardTitle">
        <h5>{props.projectName}</h5>
      </div>
      <div className="cardDes">
        <p>{props.des}</p>
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
  useEffect(() => {
    // svg-1:
    const path = document.querySelector(".svg-1");
    var pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // svg-2:
    const path2 = document.querySelector(".svg-2");
    var pathLength2 = path2.getTotalLength();

    path2.style.strokeDasharray = pathLength2;
    path2.style.strokeDashoffset = pathLength2;

    //svg-3
    const path3 = document.querySelector(".svg-3");
    var pathLength3 = path3.getTotalLength();

    path3.style.strokeDasharray = pathLength3;
    path3.style.strokeDashoffset = pathLength3;

    const onScroll = () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      // console.log('scrollPercentage:', scrollPercentage);

      if (scrollPercentage >= 0.635 && scrollPercentage <= 0.71) {
        //TODO: Improve code, refactor into function
        scrollPercentage = scrollPercentage * 6.3;
        var drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
      } else if (scrollPercentage > 0.71 && scrollPercentage <= 0.763) {
        //svg-2 logic
        scrollPercentage = scrollPercentage * 8.5;
        var drawLength2 = pathLength2 * scrollPercentage;
        path2.style.strokeDashoffset = pathLength2 - drawLength2;
      } else if (scrollPercentage > 0.763 && scrollPercentage <= 0.79) {
        //svg-2 logic
        // console.clear();
        // console.log('--here at:', scrollPercentage);
        scrollPercentage = scrollPercentage * 13.45;
        var drawLength3 = pathLength3 * scrollPercentage;
        path3.style.strokeDashoffset = pathLength3 - drawLength3;
      } else {
        return;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const torchContent = [
    "I love to play football,",
    "develop software,",
    "build trust & relationships.",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section id="interests" ref={props.innerRef}>
      <div className="interestSection">
        <div className="projectsBanner">
          <SectionBanner section={"Hobbies"} isLightTheme={false} />
        </div>
        <div className="largeText">
          <div className="container">
            <h1 className="greetingsTitle">
              My <u></u>interests ??
            </h1>
            <div className="stroke-svg">
              <svg
                viewBox="0 0 300.000000 169.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g transform="translate(0.000000,169.000000) scale(0.100000,-0.100000)">
                  <path
                    className="svg-1"
                    fill="none"
                    stroke="black"
                    strokeWidth={30}
                    d="M2180 1454 c0 -139 -68 -292 -180 -405 -103 -104 -180 -141 -456 -223 -342 -101 -386 -122 -456 -213 -43 -57 -118 -200 -118 -225 0 -33 15 -19 32 30 25 67 86 168 134 217 56 58 114 83 379 160 301 88 391 131 495 233 64 64 85 94 123 172 63 130 99 310 62 310 -12 0 -15 -13 -15 -56z"
                  />
                </g>
              </svg>
            </div>
            <p>if you want to know my interests,</p>
            <div className="stroke-svg">
              <svg
                viewBox="0 0 300.000000 169.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,169.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    className="svg-2"
                    fill="none"
                    stroke="black"
                    strokeWidth={30}
                    d="M597 1503 c-8 -12 28 -142 56 -203 34 -76 106 -171 166 -219 68 -53 139 -87 240 -112 74 -19 104 -21 225 -16 86 3 180 13 241 26 55 12 156 24 225 28 199 9 326 -22 394 -97 84 -94 77 -169 -61 -620 -36 -118 -68 -221 -70 -227 -3 -7 1 -13 9 -13 15 0 117 315 174 535 34 132 36 234 6 292 -81 155 -335 198 -712 122 -138 -28 -337 -31 -430 -6 -219 58 -373 219 -426 441 -16 70 -26 88 -37 69z"
                  />
                </g>
              </svg>
            </div>
            <h5>
              you first need to know{" "}
              <div className="me-box">
                <h4> me</h4>
                <div className="svg-underline">
                  <svg
                    viewBox="0 0 1366.000000 768.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
                      fill="none"
                      stroke="#000000"
                      strokeWidth={200}
                    >
                      <path
                        className="svg-3"
                        d="M6530 4824 c-1623 -28 -3200 -87 -4775 -179 -490 -29 -480 -27 -480 -105 0 -34 5 -47 25 -61 24 -19 34 -19 440 6 2151 128 4351 193 6110 182 1044 -7 1527 -22 2215 -68 1116 -74 1854 -202 2221 -387 115 -58 177 -110 209 -176 26 -52 26 -58 15 -107 -11 -44 -17 -53 -48 -66 -106 -44 -184 -49 -1322 -78 -674 -17 -1606 -46 -2445 -75 -1189 -41 -1465 -50 -1985 -65 -294 -8 -825 -21 -1180 -30 -1420 -33 -1617 -45 -1797 -106 -48 -16 -113 -36 -143 -44 -73 -19 -219 -72 -248 -91 -66 -43 -48 -121 52 -219 118 -117 305 -195 604 -254 200 -40 371 -58 737 -77 422 -22 487 -16 514 43 17 37 13 52 -19 84 -28 28 -33 30 -87 24 -72 -9 -534 11 -748 31 -381 35 -674 111 -833 214 -28 19 -52 38 -52 42 0 6 120 47 296 102 168 52 315 59 2074 101 791 19 1447 39 2345 70 1463 51 2612 86 3430 105 513 11 610 16 721 35 173 31 262 89 283 184 34 159 1 263 -118 373 -353 326 -1469 507 -3566 578 -296 10 -2077 20 -2445 14z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </h5>
            <div className="touchSection">
              {torchContent.map((sen) => {
                return (
                  <p
                    key={sen}
                    className="hover-objects"
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                  >
                    {sen}
                  </p>
                );
              })}
              <div
                data-aos="zoom-in-left"
                data-aos-once="false"
                data-aos-offset={10}
                data-aos-duration={275}
              >
                <button
                  className="coloredBtn finalBtn"
                  onClick={() => {
                    navigate("/learnmore");
                  }}
                  onMouseEnter={() => {
                    dispatch(setCursorStyle("learnMore"));
                  }}
                  onMouseLeave={() => {
                    dispatch(setCursorStyle("default"));
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
