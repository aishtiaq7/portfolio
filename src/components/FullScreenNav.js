import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
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

    const currentUrl = location.pathname;
    const targetElement = e.target.innerText.toString().toLowerCase();

    const getSectionId = targetElement;
    const element = document.getElementById(getSectionId);

    if (currentUrl === "/" || element !== null) {
      if (targetElement === "learn more") {
        navigate("/learnmore");
        return;
      }
      props.setShowFullScreenNav(false);
      element?.scrollIntoView({ behavior: "smooth" });
    }

    if (currentUrl === "/learnmore") {
      switch (targetElement) {
        case "home":
          navigate("/", { state: { targetId: "home" } });
          break;
        case "about":
          navigate("/", { state: { targetId: "about" } });
          break;
        case "learnmore":
          break;
        case "contact":
          navigate("/", { state: { targetId: "contact" } });
          break;
        default:
          navigate("/");
          break;
      }
    }
  };

  const handleCloseButtonClick = () => {
    tl.current.timeScale(1.65).reverse().then(() => {
      props.setShowFullScreenNav(false);
    });
  };

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
            href={googleDriveResumeLink}
            target="_blank"
            rel="noopener noreferrer"
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
