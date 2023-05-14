// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import "./LearnMore.css";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import {
  makeCursorDefault,
  textEnter,
  setCursorStyle,
  updateCursorPosition,
} from "../features/cursor/cursorSlice";

import returnCursorVariant from "../resources/cursorStyles.js";

const LearnMore = (props) => {
  const curVar = useSelector((state) => state.cursor.cursorVariant);
  const curPosition = useSelector((state) => state.cursor.cursorPosition);
  const dispatch = useDispatch();

  // console.log("curPos => ", curPosition);

  useEffect(() => {
    const mouseMove = (e) => {
      dispatch(
        updateCursorPosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div className="bg container learnMoreParent">
      <Navbar
        setShowFullScreenNav={() => {}}
        showFullScreenNav={() => {}}
        textEnterLogo={() => dispatch(setCursorStyle("logo"))}
        textLeaveLogo={() => dispatch(setCursorStyle("default"))}
      ></Navbar>

      <motion.div
        className="cursor"
        variants={returnCursorVariant(curPosition)}
        animate={curVar}
      />

      <section className="secondSection">
        Learn More Section
        <div
          className="someContent"
          onMouseEnter={() => dispatch(textEnter())}
          onMouseLeave={() => dispatch(makeCursorDefault())}
        >
          <h2>TODO(s):</h2>
        </div>
        <ul>
          <li>add side hustle info</li>
          <li>add pangenomic experience</li>
        </ul>

      </section>
    </div>
  );
};

export default LearnMore;
