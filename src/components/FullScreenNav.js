import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useDispatch } from "react-redux";
import "../../src/index.css"
import "./FullScreenNav.css";
import { setCursorStyle } from "../features/cursor/cursorSlice";

const googleDriveResumeLink =
  "https://drive.google.com/file/d/1kdT6ksc8Snk4nSEbHnbEg42-OF9ij2jd/view";

const FullScreenNav = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const closeBtnRef = useRef(null);
  const ulRef = useRef(null); // Ref for the list items
  const tl = useRef(null); // Ref for the timeline


  const [fsAnimationStates, setFsAnimationStates] = useState({
    forwardDone: null,
    reverseDone: true,
  });

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    gsap.registerPlugin(ScrollToPlugin);

    const currentUrl = location.pathname;
    const targetElement = e.target.innerText.toString().toLowerCase();
    const element = document.getElementById(targetElement);

    const handleNavigation = (path, state = null) => {
      handleCloseButtonClick(() => {
        navigate(path, { state });
      });
    };

    const scrollToElement = () => {
      handleCloseButtonClick(() => {
        const isPhone = window.innerWidth <= 768;
        const offsets = {
          home: 0,
          about: isPhone ? 100 : -54,
          default: isPhone ? 80 : 80,
        };

        const offsetYValue = offsets[targetElement] || offsets.default;

        gsap.to(window, {
          duration: targetElement === "contact" ? 2.1 : 1.25,
          scrollTo: {
            y: element,
            offsetY: offsetYValue,
            autoKill: false,
          },
          ease: "expoScale",
        });
      });
    };

    const navigationActions = {
      "/": {
        contact: () => {
          scrollToElement();
        },
        default: () => {
          if (targetElement === "learn more") {
            handleNavigation("/learnmore");
          } else {
            scrollToElement();
          }
        },
      },
      "/learnmore": {
        home: () => handleNavigation("/", { targetId: "home" }),
        about: () => handleNavigation("/", { targetId: "about" }),
        contact: () => handleNavigation("/", { targetId: "contact" }),
        default: () => handleNavigation("/learnmore"),
      },
    };

    const executeNavigation = () => {
      const action =
        navigationActions[currentUrl]?.[targetElement] ||
        navigationActions[currentUrl]?.default;

      if (action) {
        action();
      } else {
        console.error("No navigation action defined for this route.");
      }
    };

    executeNavigation();
  };

  const handleCloseButtonClick = (callback) => {
    tl.current
      .timeScale(1.65)
      .reverse()
      .then(() => {
        setFsAnimationStates((prevState) => ({
          ...prevState,
          forwardDone: false,
          reverseDone: true,
          fsAnimationStates
        }));
        props.setShowFullScreenNav(false);
        if (callback) callback();
      });
  };

  // GSAP main timeline
  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        setFsAnimationStates((prevState) => ({
          ...prevState,
          forwardDone: true,
          reverseDone: false,
        }));
      },
      onReverseComplete: () => {
        setFsAnimationStates((prevState) => ({
          ...prevState,
          forwardDone: false,
          reverseDone: true,
        }));
      },
    });

    tl.current
      .fromTo(
        closeBtnRef.current,
        { rotation: -360, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.inOut" }
      )
      .fromTo(
        ulRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.6"
      );

    if (props.showFullScreenNav) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    // eslint-disable-next-line
  }, [props.showFullScreenNav]);

  return (
    <div
      className={props.showFullScreenNav ? "fs-menu" : "displayNone"}
      onMouseEnter={(e) => {
        dispatch(setCursorStyle('default'))
      }}
      onMouseLeave={(e) => {
        dispatch(setCursorStyle('default'))
      }}
    >
      <div
        className="closeBtn"
        onClick={() => handleCloseButtonClick()}
        ref={closeBtnRef}
      >
        <IconContext.Provider value={{ className: "crossStyles" }}>
          <RxCross1 />
        </IconContext.Provider>
      </div>

      <ul ref={ulRef} className="fs-ul">
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            Home
          </button>
        </li>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            About
          </button>
        </li>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            Learn More
          </button>
        </li>
        <li>
          <button
            className="linkButtons"
            onClick={() => {
              handleCloseButtonClick(() => {
                window.open(googleDriveResumeLink, "_blank");
              });
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
