import React, { useContext, useEffect, useState } from "react";
import { CursorContext } from "../contexts/CursorContextProvider";
import useMousePosition from "../hooks/useMousePosition";
import isTouchDevice from "../utils/isTouchDevice";

const Cursor = () => {
  if(isTouchDevice) {
    return null;
  }  

  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  const gold = "rgb(253, 215, 25)"
  const alphaGold = "rgba(253, 215, 25, .5)"

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [])  

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? gold : "black",
          strokeWidth: 1,
          fill: cursor.active ? alphaGold : gold,
          mixBlendMode: cursor.active ? "difference" : null,
          transition: "transform .21s ease-in-out",
          opacity: isVisible && clientX > 1 ? 1 : 0,  
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default Cursor;
