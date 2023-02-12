import "../App.css";
import { CgCopyright } from "react-icons/cg";
import { IconContext } from "react-icons";

const Footer = (props) => {
  return (
    <footer onMouseEnter={props.footerEnter} onMouseLeave={props.footerLeave}>
      <div className="links">
        <div className="contactMe">
          <h2>Say "hi" to me:</h2>
          <br></br>
          <a href="mailto:awshafishtiaque@gmail.com">
            awshafishtiaque@gmail.com
          </a>
        </div>

        <div className="horizontalLine"></div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/awshaf-ishtiaque/">linkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/awshaf__/">instagram</a>
          </li>
          <li>
            <a href="https://github.com/aishtiaq7">github</a>
          </li>
        </ul>

        <div className="permissionstext">
          <IconContext.Provider value={{}}>
            <CgCopyright></CgCopyright>
            <h5>AWSHAF ISHTIAQUE.<span style={{paddingLeft: "0.8rem"}}></span>ALL RIGHTS RESERVED.</h5>
          </IconContext.Provider>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
