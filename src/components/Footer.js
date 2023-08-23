import "../App.css";
import { CgCopyright } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const { screenWidth } = useSelector((state) => state.globalStates);
  // console.log("sc:\t", screenWidth);

  // console.log("props.offset\t\t", props.offset);
  const value = 0.17;

  const getParallaxProperty = () => {
    if (props.offset >= 4175 && screenWidth > 600) { // for lg screens
      return `translateY(${(props.offset - 4175) * value}px)`;
    } else if (props.offset >= 4638 && screenWidth < 600) { // for phones
      return `translateY(${(props.offset - 4638) * value}px)`;
    } else {
      return `none`;
    }
  };
  return (
    <footer
      id="contact"
      onMouseEnter={props.footerEnter}
      onMouseLeave={props.footerLeave}
    >
      <div
        className="links"
        style={{
          transform:
            // props.offset >= 3800
            //   ? `translateY(${(props.offset - 3800) * value}px)`
            //   : "none",
            getParallaxProperty(),
        }}
      >
        <div className="contactMe">
          <h2>Email me at:</h2>
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
      </div>

      <div className="permissionstext">
        <IconContext.Provider value={{}}>
          <CgCopyright></CgCopyright>
          <h5>
            AWSHAF ISHTIAQUE.<span style={{ paddingLeft: "0.8rem" }}></span>ALL
            RIGHTS RESERVED.
          </h5>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
