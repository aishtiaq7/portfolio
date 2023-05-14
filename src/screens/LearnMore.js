// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./LearnMore.css";
import { motion } from "framer-motion";

import { useSelector, useDispatch} from "react-redux";
import { makeCursorDefault } from "../features/counter/counterSlice";
import { textEnter } from "../features/counter/counterSlice";

const LearnMore = (props) => {
  //   const [offset, setOffset] = useState(0); //scrollY
  const curVar = useSelector(state => state.counter.cursorVariant);
  const dispatch = useDispatch();

  // trying to move this over to redux: 
  // const [cursorVariant, setCursorVariant] = useState("default");

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

      console.log('here:',curVar);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      mixBlendMode: "difference",
      // backgroundColor: "orange",
    },

    text: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
      // backgroundColor: "red",
    },
  };

  return (
    <div className="bg container learnMoreParent">
      <Navbar
        setShowFullScreenNav={() => {}}
        showFullScreenNav={() => {}}
      ></Navbar>

      <motion.div
        className="cursor"
        variants={variants}
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
