import { Container } from "@mui/material";
import React from "react";

const DContainer = ({ ...props }) => {
  return <Container sx={{ paddingLeft: 12 }} {...props} />;
};

export default DContainer;
