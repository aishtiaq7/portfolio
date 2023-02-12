import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import "../App.css";

const Footer = (props) => {
  return (
    <nav
      className={`${props.offset > props.imageHeight ? "nav-dark" : ""} ${
        props.showFullScreenNav ? "displayNone" : ""
      } `}
      onMouseEnter={props.textEnterLogo}
      onMouseLeave={props.textLeaveLogo}
    >
      <div className="name-logo ">
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
