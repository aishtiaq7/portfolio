// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import "./LearnMore.css";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import {
  // makeCursorDefault,
  // textEnter,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <section className="introSection">
   
        {/* TODO:
              - Update padding/styles
              - AOS - animaiton on scroll (to mimic @Japanese Website clone)
                - appearing and vanishing
              - Add parallax on bullets and other element
              - Different cursor effect based on each hoveredOn element
              -
        */}

        <div className="paraContainers globalTextStyles">
          <h2 className="jobTitle">Work Experience:</h2>

          <h3 className="company">pangenomic heatlh </h3>

          <div className="bulletContainer">
            <li className="bullet">lorem ipsum blablabalbalbala</li>
            <li className="bullet">lorem ipsum blablabalbalbala</li>
            <li className="bullet">lorem ipsum blablabalbalbala</li>
          </div>
        </div>

        <div className="paraContainers globalTextStyles">
          <h2 className="jobTitle">Hobbies & Interests:</h2>

          <h3 className="company">t-shirt e-commerce </h3>

          <div className="bulletContainer">
            <li className="bullet">lorem ipsum blablabalbalbala</li>
            <li className="bullet">lorem ipsum blablabalbalbala</li>
            <li className="bullet">lorem ipsum blablabalbalbala</li>
          </div>
        </div>

      </section>
    </div>
  );
};

export default LearnMore;
