import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./FullScreenNav.css";

const googleDriveResumeLink =
  "https://drive.google.com/file/d/1kdT6ksc8Snk4nSEbHnbEg42-OF9ij2jd/view";

const FullScreenNav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const closeBtnRef = useRef(null);
  const ulRef = useRef(null); // Ref for the list items
  const tl = useRef(null); // Ref for the timeline

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    gsap.registerPlugin(ScrollToPlugin);

    const currentUrl = location.pathname;
    const targetElement = e.target.innerText.toString().toLowerCase();
    const element = document.getElementById(targetElement);

    // console.log("currentUrl => :", currentUrl);
    // console.log("targetElement => :", targetElement);
    // console.log("element => :", element);

    const handleNavigation = (path, state = null) => {
      handleCloseButtonClick();
      setTimeout(() => {
        navigate(path, { state });
      }, 750);
    };

    const scrollToElement = () => {
      handleCloseButtonClick();

    /*
        Higher offset value means go more down the page. 
        Lower (or negative) offset value means scroll up the page.
    */
      const isPhone = window.innerWidth <= 768;
      const offsets = {
        home: 0,
        about: isPhone ? 100 : -54, 
        default: isPhone ? 80 : 80, // Default offset for other sections
      };

      let offsetYValue;

      switch (targetElement) {
        case "home":
          offsetYValue = offsets.home;
          break;
        case "about":
          offsetYValue = offsets.about;
          break;
        default:
          offsetYValue = offsets.default;
          break;
      }

      // console.log(`isPhone:${isPhone} , offsetValue:${offsetYValue}`);
      gsap.to(window, {
        duration: targetElement === "contact" ? 2.1 : 1.25,
        scrollTo: {
          y: element,
          offsetY: offsetYValue,
          autoKill: true,
        },
        ease: "expoScale",
      });
    };

    if (currentUrl === "/" && targetElement === "contact") {
      scrollToElement();
    } else if (currentUrl === "/" || element !== null) {
      if (targetElement === "learn more") {
        handleNavigation("/learnmore");
      } else {
        scrollToElement();
      }
    } else if (currentUrl === "/learnmore") {
      switch (targetElement) {
        case "home":
          handleNavigation("/", { targetId: "home" });
          break;
        case "about":
          handleNavigation("/", { targetId: "about" });
          break;
        case "learn more":
          handleCloseButtonClick();
          break;
        case "contact":
          handleNavigation("/", { targetId: "contact" });
          break;
        default:
          handleNavigation("/");
          break;
      }
    }
  };

  const handleCloseButtonClick = () => {
    tl.current
      .timeScale(1.65)
      .reverse()
      .then(() => {
        props.setShowFullScreenNav(false);
      });
  };

  // GSAP main time line
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

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
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );

    if (props.showFullScreenNav) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [props.showFullScreenNav]);

  return (
    <div className={props.showFullScreenNav ? "fs-menu" : "displayNone"}>
      <div
        className="closeBtn"
        onClick={handleCloseButtonClick}
        ref={closeBtnRef}
      >
        <IconContext.Provider value={{ className: "crossStyles" }}>
          <RxCross1 />
        </IconContext.Provider>
      </div>

      <ul ref={ulRef}>
        <li>
          <a className="fs-nav-links" href="/" onClick={handleNavLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a className="fs-nav-links" href="/" onClick={handleNavLinkClick}>
            About
          </a>
        </li>
        <li className="fs-nav-li">
          <a className="fs-nav-links" href="/" onClick={handleNavLinkClick}>
            Learn More
          </a>
        </li>
        <li>
          <a
            className="fs-nav-links"
            // href={googleDriveResumeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              handleCloseButtonClick();
              setTimeout(() => {
                window.open(googleDriveResumeLink, "_blank");
              }, 850); // Adjust the delay as needed
            }}
          >
            Resume
          </a>
        </li>
        <li>
          <a className="fs-nav-links" href="/" onClick={handleNavLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
