// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./LearnMore.css";
import { motion } from "framer-motion";

// import { useSelector } from "react-redux";

const LearnMore = (props) => {
  //   const [offset, setOffset] = useState(0); //scrollY
  // const count = useSelector(state => state.counter);
  // console.log(count);

  const [cursorVariant, setCursorVariant] = useState("default");

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
        animate={cursorVariant}
      />

      <section className="secondSection">
        Learn More Section
        <div
          className="someContent"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <h2>some content</h2>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
