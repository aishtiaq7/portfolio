
import { CgCopyright } from "react-icons/cg";
import { IconContext } from "react-icons";
// eslint-disable-next-line
import { useState, useEffect } from "react";


import "./Footer.css"
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}


const Footer = (props) => {


  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log('new windowSize: ', windowSize.innerWidth);

  const value = 0.117;

  const getParallaxProperty = () => {

    if(windowSize.innerWidth >= 1848){
      console.log('warning, lg scr!!')
      return 'none';
    }


    if (props.offset >= 4175 && windowSize.innerWidth > 600) { // for lg screens
      return `translateY(${(props.offset - 4175) * value}px)`;
    } else if (props.offset >= 4638 && windowSize.innerWidth < 600) { // for phones
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
