import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import "../App.css";
import "./Navbar.css";

const Footer = (props) => {
  // console.log("offset:", props.offset);
  // console.log("inView:", props.invertNavColor);

  return (
    <nav
      className={
        props.invertNavColor || props.invertNavColor2 ? "navOnWhite" : ""
      }
      onMouseEnter={props.textEnterLogo}
      onMouseLeave={props.textLeaveLogo}
    >
      <div className="name-logo">
        <h4>AWSHAF ___</h4>
        <h4 className="ishtiaque">ISHTIAQUE</h4>
      </div>
      <div className="menu">
        <h4
          onClick={() => {
            props.setShowFullScreenNav(true);
          }}
        >
          <IconContext.Provider value={{ className: "hambergerMenu" }}>
            <HiMenu></HiMenu>
          </IconContext.Provider>
        </h4>
      </div>
    </nav>
  );
};

export default Footer;
