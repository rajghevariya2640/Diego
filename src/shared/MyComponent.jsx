import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";

const Locomotive = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // add other options here
    });

    return () => {
      // Destroy the instance on unmount
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default Locomotive;
