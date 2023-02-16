import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import "./FullScreenNav.css";
const googleDriveResumeLink =
  "https://drive.google.com/file/d/1K5BOZeUnCPommSL-S5A2wb1tGRfAqv5Z/view";

const FullScreenNav = (props) => {
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
          <a className="fs-nav-links" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="fs-nav-links" href="/">
            About
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
          <a className="fs-nav-links" href="/">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
