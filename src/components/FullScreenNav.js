import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import "./FullScreenNav.css";

// import { useState } from "react";
const googleDriveResumeLink =
  "https://drive.google.com/file/d/1ZH4BdwZ1SDUNIGf3LrCtfqUNMbCuJ6rK/view?usp=sharing";

const FullScreenNav = (props) => {
  // const [hideMenu, sethideMenu] = useState(false);

  const handleProjectsClick = (e) => {
    e.preventDefault();
    const getSectionId = e.target.innerText.toString().toLowerCase();
    const element = document.getElementById(getSectionId);
    element.scrollIntoView({ behavior: "smooth" });
    props.setShowFullScreenNav(false);
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
          <a className="fs-nav-links" href="/" onClick={handleProjectsClick}>
            Home
          </a>
        </li>
        <li>
          <a className="fs-nav-links" href="/" onClick={handleProjectsClick}>
            About
          </a>
        </li>
        <li>
          <a className="fs-nav-links" href="/" onClick={handleProjectsClick}>
            Projects
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
          <a className="fs-nav-links" href="/" onClick={handleProjectsClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
