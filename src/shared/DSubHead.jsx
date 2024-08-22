import React from "react";
import DBox from "./DBox";
import DTypography from "./DTypography";

const DSubHead = ({ head, primaryText }) => {
  return (
    <DBox position="relative">
      <DTypography variant="h2" sx={{ fontWeight: 700 }}>
        {head}
      </DTypography>
      <DTypography
        variant="xLarge"
        component="span"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotate(-35deg) translate(-25%, -110%)",
          fontWeight: 800,
          textTransform: "capitalize",
          fontFamily: '"EB Garamond", serif',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(91deg, #9ABF03 5.09%, #FF8D62 98.42%)"
              : "linear-gradient(91deg, #BCFFA4 5.09%, #F59571 98.42%)",
          display: "inline",
        }}
      >
        {primaryText}
      </DTypography>
    </DBox>
  );
};

export default DSubHead;
