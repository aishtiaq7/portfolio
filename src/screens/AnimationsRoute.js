import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Helmet } from "react-helmet-async";
import './AnimationsRoute.css';

gsap.registerPlugin(ScrollTrigger);

const AnimationsRoute = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const elements = containerRef.current.querySelectorAll("[data-speed]");
    if (elements.length > 0) {
      gsap.to(elements, {
        y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          invalidateOnRefresh: true,
          scrub: 0,
        },
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
        <Helmet>
        <title>Animations | Awshaf Space</title>
        <meta name="description" content="Explore the animations and effects used in Awshaf's projects, along with insights into their implementation." />
        <link rel="canonical" href="https://awshaf.com/animations" />
        <meta property="og:title" content="Animations | Awshaf Space" />
        <meta property="og:description" content="Showcase of animations created by Awshaf." />
        <meta property="og:url" content="https://awshaf.com/animations" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <h3>Animations</h3>
      <div className="box-container">
        <div className="box green" data-speed="0.25">0.25</div>
        <div className="box purple" data-speed="0.4">0.4</div>
        <div className="box orange" data-speed="0">0</div>
        <div className="box red" data-speed="1">1</div>
        <div className="box blue" data-speed="0.75">0.75</div>
      </div>
    </div>
  );
};

export default AnimationsRoute;
