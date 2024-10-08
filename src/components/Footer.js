import { CgCopyright } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useRef, useState, useEffect } from "react";
import "./Footer.css";

const Footer = (props) => {
  const footerRef = useRef(null);
  const [footerElement, setFooterElement] = useState({});

  useEffect(() => {
    function handleWindowScroll() {
      const footerEl = footerRef.current;
      if (footerEl) {
        setFooterElement(footerEl.getBoundingClientRect());
      }
    }

    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  const value = 1.58;

  const getParallaxProperty = () => {
    const docHeight = document.documentElement.offsetHeight;

    function mapRange(value, fromMin, fromMax, toMin, toMax) {
      const normalizedValue = (value - fromMin) / (fromMax - fromMin);
      return toMin + normalizedValue * (toMax - toMin);
    }

    if (footerElement.top - 400 < footerElement.height) {
      let translation = (props.offset / docHeight) * 100;
      let mappedValue = mapRange(translation, 75, 95, 1, 110);
      return `translateY(${mappedValue * value}px)`;
    }
  };

  //get current route to not show footer
  // specifically on the 'animations' route'
  const [location] = useState(window.location.href);
  const splitLocation = location.split("/");
  const currentUrl = splitLocation[splitLocation.length - 1];

  return currentUrl === "animations" ? (
    <></>
  ) : (
    <footer
      id="contact"
      ref={footerRef}
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
          <br />
          <a href="mailto:awshafishtiaque@gmail.com">awshafishtiaque@gmail.com</a>
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
          <li>
            <a href="https://www.digitecinnovation.ca/">digitec</a>
          </li>
          <li>
            <a href="https://ciccc.ca/wps-members/awshaf-ishtiaque/">ciccc</a>
          </li>
        </ul>
      </div>

      <div className="permissionstext">
        <IconContext.Provider value={{}}>
          <CgCopyright />
          <h5>
            AWSHAF ISHTIAQUE.<span style={{ paddingLeft: "0.8rem" }}></span>ALL RIGHTS RESERVED.
          </h5>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
