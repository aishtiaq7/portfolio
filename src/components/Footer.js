import { CgCopyright } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = (props) => {
  const [footerElement, setFooterElement] = useState({});
  useEffect(() => {
    function handleWindowScroll() {
      setFooterElement(
        document.getElementById("contact").getBoundingClientRect()
      );
    }
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const value = 1.88;

  const getParallaxProperty = () => {
    const docHeight = document.documentElement.offsetHeight;
    function mapRange(value, fromMin, fromMax, toMin, toMax) {
      const normalizedValue = (value - fromMin) / (fromMax - fromMin);
      const result = toMin + normalizedValue * (toMax - toMin);
      return result;
    }

    if (footerElement.top - 400 < footerElement.height) {
      let translation = (props.offset / docHeight) * 100;
      let mappedValue = mapRange(translation, 75, 95, 1, 110);
      return `translateY(${mappedValue * value}px)`;
    }
  };

  // eslint-disable-next-line
  const [location, _] = useState(window.location.href);
  const splitLocation = location.split("/");
  const currentUrl = splitLocation[splitLocation.length - 1];
  // console.log("lcurrentUrl __footer: =>", currentUrl);

  return currentUrl === "animations" ? (
    <></>
  ) : (
    <footer
      id="contact"
      onMouseEnter={props.footerEnter}
      onMouseLeave={props.footerLeave}
    >
      <div
        className="links"
        style={{
          transform: getParallaxProperty(),
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
            <a href="https://www.linkedin.com/in/awshaf/">linkedIn</a>
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
