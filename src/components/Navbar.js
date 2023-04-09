import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import "../App.css";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  // console.log("offset:", props.offset);
  // console.log("inView:", props.invertNavColor);
  const navigate = useNavigate();
   const navigateToHome = ()  =>{
    navigate('/');
  }

  return (
    <nav
      className={
        props.invertNavColor || props.invertNavColor2 ? "navOnWhite" : ""
      }
      onMouseEnter={props.textEnterLogo}
      onMouseLeave={props.textLeaveLogo}
    >
      <div className="name-logo" onClick={()=>navigateToHome()}>
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

export default Navbar;
