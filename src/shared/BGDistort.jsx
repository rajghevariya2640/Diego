import React from "react";
import DBox from "./DBox";
import Distort from "../assets/image/png/main-bg-distort.png";

const BGDistort = () => {
  return (
    <DBox
      sx={{
        background: `url(${Distort}) `,
        inset: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        overflow: "hidden",
        zIndex: -1,
      }}
    />
  );
};

export default BGDistort;
