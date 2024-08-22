import { createTheme } from "@mui/material";

const CustomTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#BCE70C",
        dark: "#BCE70Caa",
      },
      bgColor: {
        main: mode === "light" ? "#ffffff" : "#324623",
        main50: mode === "light" ? "#ffffff" : "#1A2813",
        main100: mode === "light" ? "#171718" : "#1D2B16",
        section: mode === "light" ? "#E4E6DC" : "#213617",
      },
      text: {
        main: mode === "light" ? "#171718" : "#ffffff",
        text50: mode === "light" ? "#252525" : "#ffffff",
      },
      border: {
        main: mode === "light" ? "#515760" : "#ffffff33",
      },
      grey: {
        grey50: "#aebcb9",
      },
      white: {
        main: "#ffffff",
      },
      black: {
        main: "#000000",
      },
    },
    components: {
      mode,
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: mode === "light" ? "#ffffff" : "#1A2813",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            "@media screen and (min-width: 0px)": {
              padding: "0 12px",
            },
          },
          maxWidthXl: {
            "@media screen and (min-width: 1400px)": {
              maxWidth: 1325,
            },
          },
          maxWidthLg: {
            "@media screen and (min-width: 1400px)": {
              maxWidth: 1200,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
    typography: {
      allVariants: {
        color: mode === "light" ? "#171718" : "#ffffff",
      },
      fontFamily: "DM Sans",
      h1: {
        fontSize: "100px",
        lineHeight: "1",
      },
      h2: {
        fontSize: "70px",
        lineHeight: "1",
      },
      h3: {
        fontSize: "40px",
        lineHeight: "1",
      },
      h4: {
        fontSize: "34px",
        lineHeight: "1.2",
      },
      h5: {
        fontSize: "30px",
        lineHeight: "1.2",
      },
      h6: {
        fontSize: "26px",
      },
      xxLarge: {
        fontSize: "24px",
      },
      xLarge: {
        fontSize: "20px",
      },
      Large: {
        fontSize: "18px",
      },
    },
  });
};
export default CustomTheme;
