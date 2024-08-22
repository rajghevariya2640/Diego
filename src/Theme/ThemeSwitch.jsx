import { FormControlLabel, styled, Switch } from "@mui/material";
import React from "react";
import { MoonIcon, SunIcon } from "../assets/image/svg/icon";

const MaterialUISwitch = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  marginLeft: "auto",
  position: "relative",
  "& svg": {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    "&.sun": {
      left: 11,
    },
    "&.moon": {
      right: 11,
    },
  },
  "& .MuiSwitch-root": {
    width: 74,
    height: 37,
    padding: 0,
    margin: "0 !important",
    borderRadius: 50,
    border: `0.5px solid ${theme.palette.text.main}50`,
    "& .MuiButtonBase-root.MuiSwitch-switchBase": {
      top: "50%",
      transform: "translate(7px, -50%)",
      padding: 0,
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.text.main,
        transition: "all 0.2s ease-in-out",
      },
      "&.Mui-checked": {
        transform: "translate(42px, -50%)",
        "& + .MuiSwitch-track": {
          backgroundColor: "transparent",
        },
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: "transparent",
    },
    "& .MuiSwitch-thumb": {
      height: 23,
      width: 23,
    },
  },
}));

const ThemeSwitch = ({ onChange, checked }) => {
  // const switchValue = localStorage.getItem("theme-mode");

  return (
    <MaterialUISwitch
      control={
        <>
          <Switch sx={{ m: 1 }} onChange={onChange} checked={checked}>
            cdxsd
          </Switch>
          <SunIcon className="sun" />
          <MoonIcon className="moon" />
        </>
      }
    />
  );
};

export default ThemeSwitch;
