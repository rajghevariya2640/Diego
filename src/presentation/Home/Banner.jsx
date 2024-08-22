import styled from "@emotion/styled/macro";
import React, { useEffect, useState } from "react";
import BannerModel from "../../assets/image/png/banner-model.png";
import Shape1 from "../../assets/image/png/banner-shape-1.png";
import Shape2 from "../../assets/image/png/banner-shape-2.png";
import BgDistort from "../../assets/image/png/bg-distort.png";
import HandWave from "../../assets/image/png/hand-wave.png";
import { CrossUpArrow } from "../../assets/image/svg/icon";
import { socialIcon } from "../../description/home.description";
import DBox from "../../shared/DBox";
import DButton from "../../shared/DButton";
import DContainer from "../../shared/DContainer";
import DGrid from "../../shared/DGrid";
import DStack from "../../shared/DStack";
import DTypography from "../../shared/DTypography";

const StyledBanner = styled(DBox)(({ theme }) => ({
  background: theme.palette.bgColor.section,
  position: "relative",
  overflow: "hidden",
  "& .bgDistort": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  "& .shape4": {
    width: 400,
    height: 400,
    borderRadius: "50%",
    display: "inline-block",
    position: "absolute",
    top: -35,
    left: 107,
    backgroundColor: " rgba(244, 190, 27, 0.35)",
    filter: "blur(150px)",
  },
}));
const SocialSection = styled(DStack)(({ theme }) => ({
  position: "absolute",
  bottom: 50,
  right: 40,
  zIndex: 99,
  alignItems: "center",
  "& .MuiStack-root": {
    "& .MuiStack-root": {
      height: 40,
      width: 40,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.bgColor.main100,
      border: `1px solid ${
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.18)"
          : "transparent"
      }`,
      transition: "all 0.3s ease-in-out",
      "& path": {
        transition: "all 0.3s ease-in-out",
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        "& path": {
          stroke: "#171718",
        },
      },
    },
  },
  "& span": {
    display: "block",
    position: "relative",
    height: 160,
    width: 1,
    marginBottom: 20,
    backgroundImage:
      theme.palette.mode === "dark"
        ? `linear-gradient(180deg, ${theme.palette.black.main}00 0%, ${theme.palette.white.main}80 100%)`
        : "linear-gradient(180deg, rgba(37, 37, 37, 0) 0%, rgba(37, 37, 37, 0.5) 100%, rgba(37, 37, 37, 0.5) 100%)",
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: -1,
      left: -1,
      transform: "translateY(-1px)",
      height: 3,
      width: 3,
      borderRadius: 10,
      backgroundColor: theme.palette.text.main,
    },
  },
}));
const BannerContent = styled(DStack)(({ theme }) => ({
  padding: "255px 0 180px",
  "& span.typingText": {
    position: "relative",
    fontSize: 100,
    fontWeight: "800",
    lineHeight: "1",
    fontFamily: '"EB Garamond", serif',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundImage:
      theme.palette.mode === "light"
        ? "linear-gradient(91deg, #9ABF03 5.09%, #FF8D62 98.42%)"
        : "linear-gradient(91deg, #BCFFA4 5.09%, #F59571 98.42%)",
    display: "inline",
    animation: "typing 3s linear ",
    overflow: "hidden",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      width: 2,
      backgroundColor: theme.palette.grey.grey50,
    },
  },
  "@keyframes typing": {
    "0%": {
      width: "0%",
    },
    "50%": {
      width: "100%",
    },
    "100%": {
      width: "0%",
    },
  },
  "& .MuiTypography-xLarge": {
    color: `${theme.palette.text.text50}b3`,
    paddingLeft: 90,
    marginBottom: 33,
  },
}));
const BannerImageSection = styled(DStack)(({ theme }) => ({
  position: "relative",
  "& .MuiBox-root:has(>img)": {
    maxWidth: 476,
    position: "relative",
    zIndex: 2,
    "& img": {
      filter: "brightness(1.1) hue-rotate(5deg) saturate(1.3) opacity(0.9)",
    },
  },
  "& .bannerShape": {
    position: "absolute",
    "&.shape1": {
      height: 70,
      width: 70,
      top: "23%",
      left: "-7%",
      zIndex: 1,
    },
    "&.shape2": {
      height: 120,
      width: 120,
      top: "30%",
      right: "-6%",
      zIndex: 1,
    },
  },
  "& .shape-3": {
    width: 600,
    height: 600,
    borderRadius: "50%",
    display: "inline-block",
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: theme.palette.mode === "dark" && "rgba(132, 153, 78, 0.6)",
    filter: "blur(190px)",
  },
}));
const AnimatedText = styled(DStack)(({ theme }) => ({
  "&.MuiStack-root": {
    position: "absolute",
    bottom: -10,
    animation: "scrollText 350s linear infinite",
    "& .MuiTypography-root": {
      fontFamily: "EB Garamond",
      fontSize: 200,
      lineHeight: 0.8,
      letterSpacing: "-0.02em",
      color: theme.palette.text.main,
      marginBottom: 0,
      paddingRight: 20,
      whiteSpace: "nowrap",
      fontWeight: 900,
      opacity: 0.03,
    },
  },
  "@keyframes scrollText": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
}));
const DecorativeSection = styled(DStack)(({ theme }) => ({
  position: "absolute",
  bottom: 40,
  left: 0,
  "& span": {
    display: "block",
    position: "relative",
    height: 317,
    width: 1,
    marginBottom: 10,
    backgroundImage:
      theme.palette.mode === "dark"
        ? `linear-gradient(180deg, ${theme.palette.black.main}00 0%, ${theme.palette.white.main}80 100%)`
        : "linear-gradient(180deg, rgba(37, 37, 37, 0) 0%, rgba(37, 37, 37, 0.5) 100%, rgba(37, 37, 37, 0.5) 100%)",
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: -1,
      left: -1,
      transform: "translateY(-1px)",
      height: 3,
      width: 3,
      borderRadius: 10,
      backgroundColor: theme.palette.text.main,
    },
  },
  "& .MuiBox-root": {
    height: 24,
    width: 16,
    border: `1px solid ${theme.palette.text.main}`,
    transform: "translateX(-50%)",
    borderRadius: 50,
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 6,
      right: 6,
      left: 5,
      height: 4,
      width: 4,
      border: `1px solid ${theme.palette.text.main}`,
      borderRadius: 10,
      animation: "scroll 1s infinite ease-in-out alternate",
    },
    "@keyframes scroll": {
      "0%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(7px)",
      },
    },
  },
}));

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const animationDuration = 3000;

    const numberOfElements = 3;

    const cycleIndex = (index) => (index + 1) % numberOfElements;

    const setActiveClasses = () => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => cycleIndex(prevIndex));
      }, animationDuration);

      return () => clearInterval(intervalId);
    };

    setActiveClasses();
  }, []);
  return (
    <StyledBanner>
      <span className="shape4"></span>
      <img src={BgDistort} alt="" className="bgDistort" />
      <AnimatedText direction="row">
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
        <DTypography>Visual designer</DTypography>
      </AnimatedText>
      <SocialSection>
        <span></span>
        <DStack gap={1.25} component="a" href="#">
          {socialIcon.map((social, socialIndex) => {
            return <DStack key={socialIndex}>{social?.icon}</DStack>;
          })}
        </DStack>
      </SocialSection>
      <DContainer sx={{ height: "100%" }}>
        <DStack
          alignItems="center"
          direction="row"
          height="100%"
          position="relative"
        >
          <DecorativeSection>
            <span></span>
            <DBox></DBox>
          </DecorativeSection>
          <DGrid
            container
            sx={{
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
            spacing={0}
          >
            <DGrid item xs={12} md={6}>
              <BannerContent>
                <DStack direction="row" alignItems="center">
                  <DTypography
                    fontFamily="EB Garamond"
                    fontWeight={700}
                    fontSize={24}
                  >
                    Hello There!
                  </DTypography>
                  <DBox sx={{ maxWidth: 40, maxHeight: 40 }}>
                    <img src={HandWave} alt="" />
                  </DBox>
                </DStack>
                <DTypography variant="h1" fontWeight="800">
                  I am Raj
                </DTypography>
                <DStack direction="row" mb="25px">
                  {activeIndex === 0 && (
                    <DTypography className="typingText" component="span">
                      App
                    </DTypography>
                  )}
                  {activeIndex === 1 && (
                    <DTypography className="typingText" component="span">
                      Web
                    </DTypography>
                  )}
                  {activeIndex === 2 && (
                    <DTypography className="typingText" component="span">
                      UX
                    </DTypography>
                  )}
                  <DTypography variant="h1" fontWeight="800">
                    designer
                  </DTypography>
                </DStack>
                <DTypography variant="xLarge" component="p">
                  The combination of my passion for design, code & interaction
                  web design world.
                </DTypography>
                <DBox sx={{ paddingLeft: "100px" }}>
                  <DButton variant="custom">
                    Get
                    <br /> in touch
                    <CrossUpArrow />
                  </DButton>
                </DBox>
              </BannerContent>
            </DGrid>
            <DGrid item xs={12} md={5} mt="auto">
              <BannerImageSection>
                <DBox>
                  <img src={BannerModel} alt="" />
                </DBox>
                <img
                  src={Shape1}
                  className="bannerShape shape1"
                  alt=""
                  data-scroll
                  data-scroll-speed="0.49"
                />
                <img
                  src={Shape2}
                  className="bannerShape shape2"
                  alt=""
                  data-scroll
                  data-scroll-speed="0.29"
                />
                <span className="shape-3"></span>
              </BannerImageSection>
            </DGrid>
          </DGrid>
        </DStack>
      </DContainer>
    </StyledBanner>
  );
};

export default Banner;
