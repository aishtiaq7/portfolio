import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect( ()=>{
    const mouseMove = e => {
      // console.log(e.clientX, e.clientY);
      setMousePosition({
        x: e.clientX, 
        y: e.clientY
      });
      // console.log(mousePosition);
    }
    window.addEventListener("mousemove", mouseMove);

    return () =>{
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [] );

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25 // minus 25 cuz radisu of cursor is 50
    },

    text: {
      height: 150,
      width: 150, 

      x: mousePosition.x - 75,
      y: mousePosition.y - 75,

      mixBlendMode: "difference",

    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");



  return (
    <div>
      <nav>
        <div className="name-logo">
          <h4>AWSHAF ___</h4>
          <h4 className="ishtiaque">ISHTIAQUE</h4>
        </div>
        <div className="menu">
          <h4>MENU</h4>
        </div>
      </nav>

      <motion.div 
        className="cursor" 
        variants={variants}
        animate={cursorVariant}
        />

      <section>
        <div className="landingSection">
          <div className="landingTitle" >
            <h3 onMouseEnter={textEnter} onMouseLeave={textLeave} >
              strategic design
              <br />
              or the brands
              <br />
              of tomorrow
            </h3>
          </div>

          <div className="portraitImg">
            <img
              className="selfportrait"
              src={require("./resources/test_portrait_img.png")}
              alt="A beautiful image"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="second-section">
          <div className="largeText">
            <h3>
              markus is a german designer specialized in strategy-led branding. He helps <br></br>
              starts-ups and medium-sized brands to stand out by combinig creative strategy and thoughful desing. <br></br>

              <br></br>

              Proident consectetur anim cillum Lorem consectetur irure cupidatat esse.
              Veniam voluptate culpa duis laboris eiusmod labore eu consequat officia officia.
            </h3>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <h3>Beginning of 3rd section</h3>
        <div className="largeText" style={{'color':'white'}}>
            <h3>
              markus is a german designer specialized in strategy-led branding. He helps <br></br>
              starts-ups and medium-sized brands to stand out by combinig creative strategy and thoughful desing. <br></br>

              <br></br>

              Proident consectetur anim cillum Lorem consectetur irure cupidatat esse.
              Veniam voluptate culpa duis laboris eiusmod labore eu consequat officia officia.
            </h3>
          </div>
      </section>
    </div>
  );
}

export default App;
