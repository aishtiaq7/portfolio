import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./FullScreenReveal.css";

const FullScreenReveal = ({ text, show, onComplete }) => {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    tlRef.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tlRef.current
      .set(containerRef.current, { y: 0, display: "block" }) // Ensure it's visible and in position
      .fromTo(
        containerRef.current,
        { y: "100%" }, // Start from off-screen at the bottom
        { y: "0%", duration: 1.5, ease: "power2.inOut" } // Slide into view
      )
      .fromTo(
        ".reveal-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=1"
      )
      .to(
        containerRef.current,
        {
          y: "-100%", // Move off-screen upwards
          duration: 1.5,
          ease: "power2.inOut",
          delay: 1.5,
        }
      )
      .set(containerRef.current, { display: "none" }); // Finally hide the container

    if (show) {
      gsap.set(containerRef.current, { display: "block" }); // Make it visible before playing
      tlRef.current.play(0); // Play from the start
    } else {
      tlRef.current.reverse();
    }
  }, [show]);

  return (
    <div ref={containerRef} className="fullscreen-reveal">
      <div className="reveal-text">{text}</div>
    </div>
  );
};

export default FullScreenReveal;