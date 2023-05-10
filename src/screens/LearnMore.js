// import "./Resume.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./LearnMore.css";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const LearnMore = (props) => {
  //   const [offset, setOffset] = useState(0); //scrollY
  const count = useSelector(state => state.counter);
  console.log(count);

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
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      mixBlendMode: "difference",
    },

    text: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
      // backgroundColor: "red",
    },

    logo: {
      height: 45,
      width: 45,

      x: mousePosition.x - 45 / 2,
      y: mousePosition.y - 45 / 2, // 75 cuz radius is 150
      mixBlendMode: "difference",
      // backgroundColor: "rgb(82, 186, 246)",
      borderRadius: "10%",
    },
    portrait: {
      height: 90,
      width: 90,

      x: mousePosition.x - 90 / 2,
      y: mousePosition.y - 90 / 2, //
      // backgroundColor: "rgb(82, 186, 246)",
      opacity: "30%",
    },
    hideCursor: {
      display: "none",
      cursor: "pointer",
    },
    cardEnter: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      // mixBlendMode: "difference",
      backgroundColor: "rgb(104, 104, 104)",
      zIndex: "15",
    },
    tourchEnter: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
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
        animate={mousePosition}
      />

      <section className="secondSection">Learn More Section</section>
    </div>
  );
};

export default LearnMore;
