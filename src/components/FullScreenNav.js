import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import "./FullScreenNav.css";

const googleDriveResumeLink =
  "https://drive.google.com/file/d/1K5BOZeUnCPommSL-S5A2wb1tGRfAqv5Z/view?usp=sharing";

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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a
            className="anchor-area"
            href={googleDriveResumeLink}
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        </li>
        <li>
          <a href="/">Contact me</a>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
