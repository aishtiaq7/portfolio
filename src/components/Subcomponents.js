import { useEffect } from "react";
import "../App.css";
import "../components/Subcomponent.css";
import { useNavigate } from "react-router-dom";

// animation on scroll lib
import AOS from "aos";
import "aos/dist/aos.css";

export const Section = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

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
          <div className="largeText">
            <div className="greetingsTitle">
              <h3
                data-aos="zoom-out-down"
                data-aos-once="false"
                data-aos-offset={250}
                data-aos-duration={550}
              >
                "helloo"
              </h3>
            </div>

            <div className="des">
              <h3>
                Welcome to my page! <br></br> <br></br>
                As I continue to develop my skills in this field and strive to
                become a better person, I look forward to using this space to
                showcase some of my projects and interests.
              </h3>

              <br></br>
              <h3>
                With the end of my final semester at SFU approaching in spring
                2023, I'm excited to dedicate time to refining my projects and
                exploring new opportunities in this field. I'm eager to see
                where this journey takes me and can't wait to share my
                experiences with you.{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const DarkSection = (props) => {
  const navigate = useNavigate();
  const navigateToLearnMore = () => {
    console.log("btn clicked");
    navigate("/learnMore");
  };

  const data = props.projectsData;
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

  return (
    <section id="projects" className="dark-section largeText">
      <div className="projectsBanner">
        <SectionBanner section={"Projects"} isLightTheme={true} />
      </div>

      <div className="container">
        <div>
          <h1 className="greetingsTitle">
            Here are some of my <u>running</u> projects...
          </h1>

          <div className="cardsContainer">{listItems}</div>
          <button
            className="learnMoreBtn"
            onClick={() => {
              navigateToLearnMore();
            }}
          >
            More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export const Card = (props) => {
  const renderIcons = (iconsList, id) => {
    return iconsList.map((icon) => {
      //TODO: Refactor the below code
      switch (icon) {
        case "css":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/css.png")}
              alt={id}
            ></img>
          );
        case "html":
          return (
            <img
              key={icon}
              style={{ padding: "1.4rem" }}
              className="icon"
              src={require("../resources/html.png")}
              alt={id}
            ></img>
          );
        case "js":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/js.png")}
              alt={id}
            ></img>
          );
        case "nodejs":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/nodejs.png")}
              alt={id}
            ></img>
          );
        case "psql":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/psql.png")}
              alt={id}
            ></img>
          );
        case "angular":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/angular.png")}
              alt={id}
            ></img>
          );
        case "docker":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/docker.png")}
              alt={id}
            ></img>
          );
        case "socketio":
          return (
            <img
              key={icon}
              className="icon"
              src={require("../resources/socketio.png")}
              alt={id}
            ></img>
          );
        default:
          return (
            <h5 key={icon} className="icon">
              *
            </h5>
          );
      }
    });
  };

  return (
    <div
      key={props.id}
      className="card"
      onMouseEnter={props.mouseEnterEvent}
      onMouseLeave={props.mouseLeaveEvent}
      onClick={() => {
        window.open(props.hyperlink, "_blank");
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
      <div className={`${isLightTheme ? "ribbon-light" : "ribbon-dark"}`}>
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
    "But I love to play football,",
    "make softwares,",
    "building trust & relationships.",
  ];

  return (
    <section id="interests" ref={props.innerRef}>
      <div className="interestSection">
        <SectionBanner section={"Interests"} isLightTheme={false} />
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
            <div className="tourchSection">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
