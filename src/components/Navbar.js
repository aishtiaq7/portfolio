import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../App.css";
import "./Navbar.css";
import { setCursorStyle } from "../features/cursor/cursorSlice";
import { useDispatch } from "react-redux";

const Navbar = (props) => {
  const navigate = useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  gsap.registerPlugin(TextPlugin, ScrollToPlugin);
  const dispatch = useDispatch();

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

  const location = useLocation();
  const currentUrl = location.pathname;
  console.log('currentUrl', currentUrl) ;

  const navigateToHome = () => {
    if (currentUrl === "/") {
      gsap.to(window, {
        duration: 1.35,
        scrollTo: {
          y: "#home", // Scroll to the target section
          offsetY: 50, // Adjust offset if needed
          autoKill: false, // Automatically kill the tween if user scrolls manually
        },
        ease: "power2.inOut",
      });
    }

    navigate("/", { state: { targetId: "home" }, replace: true });
  };

  return (
    <nav
      ref={containerRef}
      className={`navbar ${
        currentUrl === "/learnmore" ? "learnMoreSpecificStyles" : ""
      } ${
        props.aboutSectionInView ||
        props.invertNavColor ||
        props.invertNavColor2
          ? "navOnWhite"
          : ""
      }`}
      onMouseEnter={() => {
        dispatch(setCursorStyle("onNavbar"));
      }}
      onMouseLeave={() => {
        dispatch(setCursorStyle("default"));
      }}
    >
      <div
        className="name-logo"
        onClick={navigateToHome}
        onMouseEnter={() => {
          dispatch(setCursorStyle("logo"));
          restartAnimation();
        }}
        onMouseLeave={() => {
          dispatch(setCursorStyle("onNavbar"));
        }}
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
            dispatch(setCursorStyle("default"));
          }}
          onMouseEnter={(e) => {
            dispatch(setCursorStyle("logo"));
            e.stopPropagation();
          }}
          onMouseLeave={(e) => {
            dispatch(setCursorStyle("onNavbar"));
            e.stopPropagation();
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
