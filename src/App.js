import { useEffect, useState, useRef } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [offset, setOffset] = useState(0); //scrollY

  const ref = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  console.log("offset:", offset);
  // console.log("imageHeight:", imageHeight);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    window.addEventListener("mousemove", mouseMove);

    setImageHeight(ref.current.clientHeight);


    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
    },

    text: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
    },

    logo: {
      height: 45,
      width: 45,

      x: mousePosition.x - 45 / 2,
      y: mousePosition.y - 45 / 2, // 75 cuz radius is 150
      mixBlendMode: "difference",
      // backgroundColor: "rgb(82, 186, 246)",
      borderRadius: "10%",
    },
    portrait: {
      height: 90,
      width: 90,

      x: mousePosition.x - (90/2),
      y: mousePosition.y - (90/2), //
      // backgroundColor: "rgb(82, 186, 246)",
      opacity: "30%"
    },
    

  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const textEnterLogo = () => setCursorVariant("logo");
  const textLeaveLogo = () => setCursorVariant("default");

  const portraitEnter = () => setCursorVariant("portrait");
  const portraitLeave = () => setCursorVariant("default");

  return (
    <div>
      <nav  className={offset > imageHeight ? "nav-dark": ""} onMouseEnter={textEnterLogo} onMouseLeave={textLeaveLogo}>
        <div className="name-logo ">
          <h4>AWSHAF ___</h4>
          <h4 className="ishtiaque">ISHTIAQUE</h4>
        </div>
        <div className="menu">
          <h4>MENU</h4>
        </div>
      </nav>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      <section ref={ref}>
        <div className="landingSection">
          <div className="landingTitle">
            <h3
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="landingText"
            >
              On the journey
              <br />
              to learn & create
              <br />
              applications that matter.
            </h3>
          </div>

          <div className="portraitImg">
            <img
              onMouseEnter={portraitEnter}
              onMouseLeave={portraitLeave}
              className="selfportrait"
              src={require("./resources/landingportrait.png")}
              alt="souvenir"
            />
          </div>
        </div>
      </section>

      <section>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="second-section"
        >
          <div className="largeText">
            <h3>
              <span className="greetingsTitle">"hi there" </span>
              <br></br>
              Its a pleasure to have you here on my page. <br></br>
              <br></br>
              As I grow my skills to become a competent Software Developer
              (alongside being a better person ofcourse),
              <br></br>I want to use this platform to showcase some of my work,
              interests and hopefully give you an impression of me. :p
            </h3>
          </div>
        </div>
      </section>

      <section className="dark-section">
        {/* <h3>Beginning of 3rd section</h3> */}
        <div className="largeText" style={{ color: "white" }}>
          <h3>
            I will continue to actively update this page and hopefully give you
            a better experience soon.
            <br></br>
            Untill then, take care.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
