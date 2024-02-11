import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import "../App.css";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
  const navigate = useNavigate();
   const navigateToHome = ()  =>{
    navigate('/');
  }

  // const onClickHandler = () => {
  //   console.log('used onclick');
  // }

  return (
    <nav
      className={
        props.invertNavColor || props.invertNavColor2 ? "navOnWhite" : ""
      }
      onMouseEnter={props.textEnterLogo}
      onMouseLeave={props.textLeaveLogo}
    >
      <div className="name-logo" onClick={()=>navigateToHome()}>
        <h4 className="firstName">AWSHAF__</h4>
        <h4 className="lastName">ISHTIAQUE</h4>
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
