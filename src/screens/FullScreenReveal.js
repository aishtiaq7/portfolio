import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./FullScreenReveal.css";

const FullScreenReveal = ({ text, show, onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const tl = useRef(null); // Ref for the timeline

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .set(containerRef.current, { zIndex: 9999 }) // Ensure container is in front initially
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, ease: "none" } // Instant reveal
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

    if (show) {
      gsap.set(containerRef.current, { display: "block", zIndex: 9999 }); // Make it visible and in front before playing
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [show]);

  return (
    <div ref={containerRef} className="fullscreen-reveal">
      <div ref={textRef} className="reveal-text">
        {text}
      </div>
    </div>
  );
};

export default FullScreenReveal;
