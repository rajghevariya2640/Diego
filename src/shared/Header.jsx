import styled from "@emotion/styled/macro";
import { AppBar, Drawer } from "@mui/material";
import React from "react";
import { useTheme } from "../Theme/ThemeProviderWrapper";
import ThemeSwitch from "../Theme/ThemeSwitch";
import Logo from "../assets/image/png/logo.png";
import { CloseIcon, MenuIcon } from "../assets/image/svg/icon";
import { menuList } from "../description/home.description";
import DBox from "../shared/DBox";
import DContainer from "../shared/DContainer";
import DGrid from "../shared/DGrid";
import DList from "../shared/DList";
import DListItem from "../shared/DListItem";
import DStack from "../shared/DStack";
import DTypography from "../shared/DTypography";
import DrawerBG1 from "../assets/image/png/drawer-bg-1.png";
import DrawerIMG1 from "../assets/image/png/drawer-1.jpg";
import DrawerIMG2 from "../assets/image/png/drawer-2.jpg";
import DrawerIMG3 from "../assets/image/png/drawer-3.jpg";

const Header = () => {
  const { toggleTheme, mode } = useTheme();

  // Drawer Open
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const StyledAppbar = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "transparent",
    borderBottom:
      theme?.palette?.mode === "dark"
        ? "1px solid #fff2"
        : "1px solid #25252529",
  }));
  const Navbar = styled(DGrid)(({ theme }) => ({
    "& .MuiBox-root:has(> img)": {
      maxWidth: 115,
    },
  }));
  const MenuList = styled(DList)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "40px",
    padding: 0,
    "&:has( .homeMenu)": {
      position: "static",
      "& .MuiListItem-root": {
        position: "static",
      },
    },
    "& .MuiListItem-root": {
      padding: 0,
      width: "auto",
      position: "relative",
      "& a": {
        color: theme.palette.text.main,
        fontWeight: 600,
        lineHeight: "26px",
        textTransform: "capitalize",
        padding: "24px 0",
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 2,
          backgroundColor: theme.palette.text.main,
          transition: "all 0.2s",
        },
      },
      "&:hover": {
        "& > a::after": {
          width: "100%",
        },
        "& .MuiList-root": {
          opacity: 1,
          visibility: "visible",
          transform: "perspective(300px) rotateX(0deg)",
        },
      },
    },
  }));
  const SubMenu = styled(DList)(({ theme }) => ({
    "&.MuiList-root": {
      position: "absolute",
      top: "101%",
      backgroundColor: `${theme.palette.bgColor.main}70`,
      padding: "26px 0",
      boxShadow:
        "0px 2px 4px 0px rgba(23, 23, 24, 0.2), 0px -1px 0px 0px rgba(36, 62, 21, 0.5)",
      borderRadius: "0px 0px 4px 4px",
      width: 220,
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.2s ease-in-out",
      transform: "perspective(300px) rotateX(-18deg)",
      transformOrigin: "top",
      backdropFilter: "blur(14px)",
      overflow: "hidden",
      "&.homeMenu": {
        width: 1060,
        margin: "0 auto",
        right: 0,
        left: 0,
        padding: "30px 30px 10px",
        display: "flex",
        flexWrap: "wrap",
        "& .MuiStack-root": {
          padding: "0px 10px",
          position: "relative",
          flex: "0 0 auto",
          width: "25%",
          marginBottom: 20,
          "&::after": {
            display: "none",
          },
          "& .MuiTypography-h6": {
            lineHeight: "21px",
          },
          "&:hover": {
            "& .MuiTypography-h6": {
              "&::after": {
                width: "100%",
                height: 1,
              },
            },
          },
        },
        "& .MuiBox-root": {
          maxWidth: "100%",
          marginBottom: 15,
        },
        "& .MuiTypography-h6": {
          fontSize: 16,
          fontWeight: 600,
          padding: 0,
          width: "fit-content",
          margin: "0 auto",
        },
        "& .MuiListItem-root": {
          padding: 0,
        },
      },
      "& .MuiListItem-root": {
        padding: "0 30px",
        marginBottom: 5,
        "& a": {
          padding: 0,
          fontSize: 15,
          fontWeight: 500,
          position: "relative",
          transition: "all 0.2s ease-in-out",
          "&::after": {
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            borderRadius: 3,
            opacity: 0,
            visibility: "hidden",
            height: 0.5,
          },
          "&:hover": {
            paddingLeft: 25,
            "&::after": {
              width: 20,
              opacity: 1,
              visibility: "visible",
            },
          },
        },
      },
    },
  }));
  const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiBackdrop-root": {
      opacity: "0.3 !important",
    },
    "& .MuiPaper-root": {
      animation: "slideLeft 0.3s ease-in-out ",
      border: `1px solid ${theme.palette.border.main}`,
      overflow: "hidden",
    },
    "@keyframes slideLeft": {
      "0%": {
        transform: "translateX(100%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
    '& .MuiBox-root[role="presentation"]': {
      padding: 50,
      width: 450,
      height: "100%",
      position: "relative",
      backgroundColor: theme.palette.bgColor.main50,
      "& .shape1": {
        height: 600,
        width: 600,
        borderRadius: 600,
        background: theme.palette.mode === "dark" && "rgba(132, 153, 78, 0.6)",
        filter: " blur(190px)",
        display: "inline-block",
        position: "absolute",
        bottom: -270,
        right: -410,
      },
      "& .shape2": {
        height: 400,
        width: 400,
        borderRadius: 400,
        background: theme.palette.mode === "dark" && "rgba(244, 190, 27, 0.3)",
        filter: "blur(150px)",
        display: "inline-block",
        position: "absolute",
        top: -40,
        left: -240,
      },
      "& .bgImage1": {
        position: "absolute",
        bottom: 0,
        right: 0,
        mixBlendMode: theme.palette.mode === "light" && "exclusion",
      },
    },
  }));
  return (
    <StyledAppbar position="fixed">
      <DContainer maxWidth="Xl">
        <Navbar container alignItems="center" position="relative">
          <DGrid items xs={6} md={2}>
            <DBox>
              <img src={Logo} alt="" />
            </DBox>
          </DGrid>
          <DGrid items md={6} lg={7} xl={6}>
            <MenuList>
              {menuList.map((menu, menuIndex) => {
                return (
                  <DListItem key={menuIndex}>
                    <a href="/">{menu.label}</a>
                    {menu.subList && (
                      <SubMenu>
                        {menu?.subList?.map((subList, subListIndex) => {
                          return (
                            <DListItem key={subListIndex}>
                              <a href="/">{subList}</a>
                            </DListItem>
                          );
                        })}
                      </SubMenu>
                    )}
                    {menu.previewList && (
                      <SubMenu
                        className={`${menu.previewList ? "homeMenu" : ""}`}
                      >
                        {menu?.previewList?.map((preview, previewIndex) => {
                          console.log(menu?.homeMenu);
                          return (
                            <DStack component="a" href="/">
                              <DBox>
                                <img
                                  key={previewIndex}
                                  src={preview?.src}
                                  alt={`Preview ${previewIndex}`}
                                />
                              </DBox>
                              <DTypography
                                variant="h6"
                                component="a"
                                href="/"
                                textAlign="center"
                              >
                                {preview?.label}
                              </DTypography>
                            </DStack>
                          );
                        })}
                      </SubMenu>
                    )}
                  </DListItem>
                );
              })}
            </MenuList>
          </DGrid>
          <DGrid items md={4} lg={3} xl={4}>
            <DStack
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={2.5}
              sx={{
                "& a": {
                  color: (theme) => theme.palette.text.main,
                },
              }}
            >
              <ThemeSwitch onChange={toggleTheme} checked={mode === "dark"} />
              <a href="#/" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </a>
              <StyledDrawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <DBox role="presentation">
                  <span className="shape1"></span>
                  <span className="shape2"></span>
                  <span className="bgImage1">
                    <img src={DrawerBG1} alt="" />
                  </span>
                  <DStack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      marginBottom: "90px",
                      "& a": {
                        color: (theme) => theme.palette.text.main,
                        transition: "0.3s ease-in-out",
                        opacity: 0.7,
                        "&:hover": {
                          transform: "rotate(90deg)",
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <DBox sx={{ maxWidth: 115 }}>
                      <img src={Logo} alt="" />
                    </DBox>
                    <a href="#/" onClick={toggleDrawer(false)}>
                      <CloseIcon />
                    </a>
                  </DStack>
                  <DStack mb="45px">
                    <DTypography variant="h3" fontWeight={700} mb="15px">
                      Hello There!
                    </DTypography>
                    <DTypography fontWeight={500}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </DTypography>
                  </DStack>
                  <DStack direction="row" gap={1} mb="65px">
                    <DBox sx={{ width: "calc(25% - 4px)" }}>
                      <img src={DrawerIMG1} alt="" />
                    </DBox>
                    <DBox sx={{ width: "calc(25% - 4px)" }}>
                      <img src={DrawerIMG2} alt="" />
                    </DBox>
                    <DBox sx={{ width: "calc(25% - 4px)" }}>
                      <img src={DrawerIMG3} alt="" />
                    </DBox>
                    <DBox sx={{ width: "calc(25% - 4px)" }}>
                      <img src={DrawerIMG2} alt="" />
                    </DBox>
                  </DStack>
                  <DStack>
                    <DTypography fontWeight={700} mb="15px">
                      Information
                    </DTypography>
                    <DList
                      sx={{
                        padding: 0,
                        "& .MuiListItem-root": {
                          padding: 0,
                          lineHeight: "26px",
                          fontSize: 15,
                        },
                      }}
                    >
                      <DListItem>+91 8200729163</DListItem>
                      <DListItem>rajghevariya40@gmail.com</DListItem>
                      <DListItem>Avenue de Roma 158b, Lisboa</DListItem>
                    </DList>
                  </DStack>
                </DBox>
              </StyledDrawer>
            </DStack>
          </DGrid>
        </Navbar>
      </DContainer>
    </StyledAppbar>
  );
};

export default Header;
