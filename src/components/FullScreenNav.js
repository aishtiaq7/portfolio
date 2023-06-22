import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import {
  useLocation,
  useNavigate,
  // , useNavigate
} from "react-router-dom";
import "./FullScreenNav.css";

// import { useState } from "react";
const googleDriveResumeLink =
  "https://drive.google.com/file/d/1v3Wg3pl-AYEMR8OeJRS8vQnoFAPi6so3/view?usp=sharing";

const FullScreenNav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const navigate = useNavigate();
  const handleNavLinkClick = (e) => {
    e.preventDefault();

    const currentUrl = location.pathname;
    const targetElement = e.target.innerText.toString().toLowerCase();

    const getSectionId = targetElement;
    const element = document.getElementById(getSectionId);

    // console.log("element:", element);

    if (currentUrl === "/" || element !== null) {
      // console.log("> landing page <");
      // console.log("targetElement:", element);

      if (targetElement === "learn more") {
        navigate("/learnmore");
        return;
      }
      props.setShowFullScreenNav(false);
      element?.scrollIntoView({ behavior: "smooth" });
    }

    if (currentUrl === "/learnmore") {
      // console.log("> learnmore <");
      // console.log("targetElement:", targetElement);

      switch (targetElement) {
        case "home":
          navigate("/");
          break;
        case "about":
          navigate("/");
          break;
        case "learnmore":
          // navigate("/learnmore");
          break;
        case "contact":
            console.log('my element :', element);
            element.scrollIntoView({ behavior: "smooth" });
            break;
        default:
          navigate("/");
          break;
      }
    }
  };
  return (
    <div className={props.showFullScreenNav ? "fs-menu" : "displayNone"}>
      <div
        className="closeBtn"
        onClick={() => {
          props.setShowFullScreenNav(false);
        }}
      >
        <IconContext.Provider value={{ className: "crossStyles" }}>
          <RxCross1 />
        </IconContext.Provider>
      </div>
      <ul>
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
        <li>
          <a className="fs-nav-links" href="/" onClick={handleNavLinkClick}>
            Learn More
          </a>
        </li>
        {/* <li>
          <a className="fs-nav-links" href="/" onClick={handleProjectsClick}>
            Interests
          </a>
        </li> */}
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
