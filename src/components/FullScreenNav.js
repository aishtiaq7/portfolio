import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import "./FullScreenNav.css";

const googleDriveResumeLink =
  "https://drive.google.com/file/d/1v3Wg3pl-AYEMR8OeJRS8vQnoFAPi6so3/view?usp=sharing";

const FullScreenNav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
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
