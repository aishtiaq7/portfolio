import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import "../App.css";
import "./Navbar.css";


const Navbar = (props) => {
  const navigate = useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  gsap.registerPlugin(TextPlugin);

  useGSAP(
    (context) => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.3,
          ease: "ease.in",
          text: {
            scramble: 1,
            delimiter: "",
            speed: 1,
          },
        },
      });

      tl.fromTo(
        firstNameRef.current,
        { text: { value: "AZLQIA__" } },
        { text: { value: "AWSHAF__" } }
      );

      tl.fromTo(
        lastNameRef.current,
        { text: { value: "_________" } },
        { text: { value: "ISHTIAQUE" }, duration: 2.6, ease: "power2.out" },
        "-=0.7"
      );

      tlRef.current = tl;
    },
    { scope: containerRef }
  );

  const restartAnimation = () => {
    if (tlRef.current) {
      tlRef.current.restart(); // Restart the timeline
    }
  };

  useEffect(() => {
    const intervalId = setInterval(restartAnimation, 8500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const navigateToHome = () => {
    // navigate("/");
    navigate("/", { state: { targetId: "home" } });
  };

  return (
    <nav
      ref={containerRef}
      className={
        props.aboutSectionInView ||
        props.invertNavColor ||
        props.invertNavColor2
          ? "navOnWhite"
          : ""
      }
      onMouseEnter={() => {
        props.textEnterLogo();
      }}
      onMouseLeave={props.textLeaveLogo}
    >
      <div
        className="name-logo"
        onClick={navigateToHome}
        onMouseEnter={()=>restartAnimation()}
      >
        <h4 ref={firstNameRef} className="firstName">
          Awshaf
        </h4>
        <h4 ref={lastNameRef} className="lastName">
          Ishtiaque
        </h4>
      </div>

      <div className="menu">
        <h4
          onClick={() => {
            props.setShowFullScreenNav(true);
          }}
        >
          <IconContext.Provider value={{ className: "hambergerMenu" }}>
            <HiMenu />
          </IconContext.Provider>
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
