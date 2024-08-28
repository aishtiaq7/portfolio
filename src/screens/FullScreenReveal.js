// FullScreenReveal.js
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./FullScreenReveal.css"; // You will define your styles here

const FullScreenReveal = ({ text, show, onComplete }) => {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    tlRef.current = gsap.timeline({
      paused: true,
      onComplete: onComplete,
    });

    tlRef.current
      .fromTo(
        containerRef.current,
        { y: 0 },
        { y: "-100%", duration: 1.5, ease: "power2.inOut" }
      )
      .fromTo(
        ".reveal-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=1"
      )
      .to(containerRef.current, {
        y: "-100%",
        duration: 1.5,
        ease: "power2.inOut",
        delay: 1.5,
      });

    if (show) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [show]);

  console.log('this getting rendered')
  return (
    <div ref={containerRef} className="fullscreen-reveal">
      <div className="reveal-text">{text}</div>
    </div>
  );
};

export default FullScreenReveal;
