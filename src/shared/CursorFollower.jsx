// CursorFollower.js
import styled from "@emotion/styled/macro";
import React, { useEffect, useState } from "react";
import DBox from "./DBox";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const StyledFollower = styled(DBox)(({ theme }) => ({
    position: "fixed",
    top: `${position.y}px`,
    left: `${position.x}px`,
    height: 30,
    width: 30,
    border: `2px solid ${theme.palette.text.main}50`,
    borderRadius: "100%",
    pointerEvents: "none",
    zIndex: 9999,
    transform: "translate(-50%,-50%)",
  }));
  return <StyledFollower />;
};

export default CursorFollower;
