import styled from "@emotion/styled/macro";
import { Button } from "@mui/material";
import React from "react";

const DButton = ({ ...props }) => {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [isHovered, setIsHovered] = useState(false);
  // const requestAnimationFrameRef = useRef(null);

  // const handleMouseMove = (e) => {
  //   const rect = e.target.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  //   cancelAnimationFrame(requestAnimationFrameRef.current);
  //   requestAnimationFrameRef.current = requestAnimationFrame(() => {
  //     setCursorPosition({ x, y });
  //   });
  // };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const StyledButton = styled(Button)(({ theme }) => ({
    "&.MuiButton-custom": {
      height: 149,
      width: 149,
      borderRadius: "100%",
      border: `1px solid ${theme.palette.text.text50}29`,
      fontSize: 18,
      lineHeight: "1.22",
      fontWeight: 600,
      padding: 0,
      textAlign: "left",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      backgroundColor: "transparent",
      "&:hover": {
        color: theme?.palette.mode === "dark" && "#171718",
        "&::after": {
          transform: "scale(20)",
        },
      },
      "&::after": {
        zIndex: -1,
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        height: 20,
        width: 20,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        transition: "all 0.5s ease-in-out",
        transform: "scale(1)",
      },
      "& svg": {
        marginLeft: 8,
        transform: "translateY(9px)",
      },
    },
  }));
  return (
    <StyledButton
      disableElevation
      {...props}
      // onMouseMove={handleMouseMove}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    />
  );
};

export default DButton;
