import React from "react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          setBackToTop(true)
      } else {
          setBackToTop(false)
      }
    });
  }, []);

  const scrollUp = () => {
      window.scrollTo({
          top: 0, 
          behavior: 'smooth'
      })
  }

  return (
  <div className="scroll-to-top">
      {backToTop && <button className="scroll-button" onClick={scrollUp}>
   <p className="up-arrow-button">^ Back to top ^</p>
    </button>}
  </div>

)};

export default ScrollToTop;
