import React, { useEffect } from "react";
import "./ScrollArow.scss";

const ScrollArrow: React.FC = () => {
  useEffect(() => {
    const arrow = document.querySelector(".scroll-arrow");
    if (arrow) {
      setTimeout(() => {
        arrow.classList.add("animate");
      }, 1000); // Start the animation after 1 second
    }
  }, []);

  return (
    <div className="scroll-arrow">
      <svg width="30" height="50" viewBox="0 0 30 50">
        <line x1="15" y1="0" x2="15" y2="30" stroke="#fff" strokeWidth="2" />
        <polyline points="5,30 15,45 25,30" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default ScrollArrow;