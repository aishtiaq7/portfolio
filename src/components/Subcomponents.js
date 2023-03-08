import { useEffect } from "react";
import "../App.css";
import "../components/Subcomponent.css";

export const Section = (props) => {
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
              <h3>"helloo"</h3>
            </div>

            <div className="des">
              <h3>
                Its a pleasure to have you here on my page. <br></br> <br></br>
                As I grow my skills to become a competent Software Developer
                (alongside being a better person of course), I want to use this
                platform to showcase some of my work, interests and hopefully
                give you an impression of me. :p
              </h3>

              <br></br>
              <h3>
                Alongside completing my last semester in SFU, i will be spending
                some time updating my portfolio page and seek software
                development opportunites
              </h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const DarkSection = (props) => {
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
    <section id="projects" className="dark-section">
      <div className="largeText">
        <SectionBanner section={"Projects"} isLightTheme={true} />
        <div className="container">
          <div>
            <h1 className="greetingsTitle">
              I will be updating this projects section soon...
            </h1>

            <div className="cardsContainer">{listItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Card = (props) => {
  const renderIcons = (iconsList, id) => {
    return iconsList.map((icon) => {
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
              style={{ padding: "1rem" }}
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
        // uncomment to enable onClick listener:
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
        <p>
          Magna excesint eat exercitation officia eiusmod deserunt veniam. Duis
          labore qui ut sunt tempor ut officia irure cu.
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
    path.style.strokeDashoffset = pathLength ;

    // svg-2:
    const path2 = document.querySelector(".svg-2");
    var pathLength2 = path2.getTotalLength();

    path2.style.strokeDasharray = pathLength2;
    path2.style.strokeDashoffset = pathLength2;

    const onScroll = () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      if (scrollPercentage >= 0.635 && scrollPercentage <= 0.71) {
        scrollPercentage = scrollPercentage * 6.3;

        var drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;

      } else if (scrollPercentage > 0.71 && scrollPercentage <= 0.78 ) {
        // console.clear()
        // console.log("--------------------------------start");
        // console.log("scrollPercentage:", scrollPercentage);
        scrollPercentage = scrollPercentage * 3.2;

        var drawLength2 = pathLength2 * scrollPercentage;
        // console.log("drawLength:", drawLength2);

        path2.style.strokeDashoffset = pathLength2 - drawLength2;
        // console.log(path2);

      } else {
        return;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={props.innerRef}>
      <div className="interestSection">
        <SectionBanner section={"Interests"} isLightTheme={false} />
        <div className="largeText">
          <div className="container">
            <h1 className="greetingsTitle">My interests</h1>

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
            <p>
              you first need to know <u>me</u>.
            </p>

            <div
              className="tourchSection"
              onMouseEnter={props.onMouseEnter}
              onMouseLeave={props.onMouseLeave}
            >
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>this text to be visible only by the cursor hover</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
              <p>lala</p>
            </div>

            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};
