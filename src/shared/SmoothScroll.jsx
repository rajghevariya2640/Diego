import ReactLenis from "@studio-freight/react-lenis";
import React from "react";

const SmoothScroll = () => {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
    ></ReactLenis>
  );
};

export default SmoothScroll;
