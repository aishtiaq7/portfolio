import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// eslint-disable-next-line 
import { useSelector, useDispatch } from "react-redux";

import "./FullScreenReveal.css";

const FullScreenReveal = ({ text, show, onComplete }) => {
  const isRevealTransitionOn = useSelector((state) => state.globalStates.isRevealTransitionOn);

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .set(containerRef.current, { zIndex: 9999 })
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.01, ease: "none" }
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .to(
        textRef.current,
        { opacity: 0, y: 20, duration: 1, ease: "power2.inOut", delay: 1 }
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(containerRef.current, { zIndex: -1 }); // Send container to back after animation
          if (onComplete) onComplete();
        },
      });

    if (isRevealTransitionOn) {
      gsap.set(containerRef.current, { display: "block", zIndex: 9999 }); // Make it visible and in front before playing
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isRevealTransitionOn, onComplete]);

  return (
    <div ref={containerRef} className="fullscreen-reveal">
      <div ref={textRef} className="reveal-text">
        {/* {text} */}
      </div>
    </div>
  );
};

export default FullScreenReveal;
