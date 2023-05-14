// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./LearnMore.css";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { makeCursorDefault } from "../features/counter/cursorSlice";
import { textEnter } from "../features/counter/cursorSlice";

import returnCursorVariant from "../resources/cursorStyles.js";

const LearnMore = (props) => {
  const curVar = useSelector((state) => state.counter.cursorVariant);
  const dispatch = useDispatch();

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
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
      ></Navbar>

      <motion.div
        className="cursor"
        variants={returnCursorVariant(mousePosition)}
        animate={curVar}
      />

      <section className="secondSection">
        Learn More Section
        <div
          className="someContent"
          onMouseEnter={() => dispatch(textEnter())}
          onMouseLeave={() => dispatch(makeCursorDefault())}
        >
          <h2>some content</h2>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
