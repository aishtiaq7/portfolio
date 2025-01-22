"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define your size-related constants here
const SVG_VIEWBOX_WIDTH = 320;
const SVG_VIEWBOX_HEIGHT = 100;
const SVG_STROKE_WIDTH = 0.3;
const TAILWIND_FONT_SIZE_CLASS = "text-6xl";

export const TextHoverEffect = ({ text, duration }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${SVG_VIEWBOX_WIDTH} ${SVG_VIEWBOX_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"#FFD700"} /> {/* Bright Yellow */}
              <stop offset="25%" stopColor={"#FF4500"} /> {/* Vibrant Red-Orange */}
              <stop offset="50%" stopColor={"#1E90FF"} /> {/* Dodger Blue */}
              <stop offset="75%" stopColor={"#00FA9A"} /> {/* Medium Spring Green */}
              <stop offset="100%" stopColor={"#FF7F11"} /> {/* Blue Violet */}
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="30%" // Larger cursor effect
          animate={maskPosition}
          transition={{ duration: duration ?? 0.2, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFFFE0" /> {/* Soft Yellow Glow */}
          <stop offset="100%" stopColor="#000000" />
        </motion.radialGradient>
        
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Dim/White Outline (shown on hover) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={SVG_STROKE_WIDTH}
        className={`font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent ${TAILWIND_FONT_SIZE_CLASS}`}
        style={{ opacity: hovered ? 0.7 : 0.0 }}
      >
        {text}
      </text>

      {/* Animated Outline Reveal */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={SVG_STROKE_WIDTH}
        className={`font-[helvetica] font-bold fill-transparent stroke-neutral-200 dark:stroke-neutral-800 ${TAILWIND_FONT_SIZE_CLASS}`}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Rainbow Gradient (via mask on hover) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth={SVG_STROKE_WIDTH}
        mask="url(#textMask)"
        className={`font-[helvetica] font-bold fill-transparent ${TAILWIND_FONT_SIZE_CLASS}`}
      >
        {text}
      </text>
    </svg>
  );
};

export default TextHoverEffect;