import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet-async";
import "./AnimationsRoute.css";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxElements = () => {
  return (
    <>
      {" "}
      <div className="box-container">
        <div className="box green" data-speed="0.25">
          0.25
        </div>
        <div className="box purple" data-speed="0.4">
          0.4
        </div>
        <div className="box orange" data-speed="0">
          0
        </div>
        <div className="box red" data-speed="1">
          1
        </div>
        <div className="box blue" data-speed="0.75">
          0.75
        </div>
      </div>
    </>
  );
};

const AnimationsRoute = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const elements = containerRef.current.querySelectorAll("[data-speed]");
      if (elements.length > 0) {
        gsap.to(elements, {
          y: (i, el) =>
            (1 - parseFloat(el.getAttribute("data-speed"))) *
            ScrollTrigger.maxScroll(window),
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            invalidateOnRefresh: true,
            scrub: 0,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <Helmet>
        <title>Animations | Awshaf Ishtiaque</title>
        <meta
          name="description"
          content="Explore the animations and effects used in Awshaf's projects, along with insights into their implementation."
        />
        <link rel="canonical" href="https://awshaf.com/animations" />
        <meta property="og:title" content="Animations | Awshaf Space" />
        <meta
          property="og:description"
          content="Showcase of animations created by Awshaf."
        />
        <meta property="og:url" content="https://awshaf.com/animations" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* <ParallaxElements/> */}
      
      <div
        style={{
          flex: "0 0 40%",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          margin: "10px 0",
          height: "100vh"
        }}
      >
        <h3>Animations</h3>
        <h4>Card Title</h4>
        <p>This is a card that takes up 40% of the space.</p>
      </div>

      <p style={{ textAlign: "center", marginBottom: "10px" }}>
        This is a one-liner at the bottom.
      </p>
    </div>
  );
};

export default AnimationsRoute;
