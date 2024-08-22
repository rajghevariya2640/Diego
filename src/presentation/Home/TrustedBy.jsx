import styled from "@emotion/styled/macro";
import React from "react";
import DBox from "../../shared/DBox";
import DGrid from "../../shared/DGrid";
import DTypography from "../../shared/DTypography";
import DContainer from "../../shared/DContainer";
import DSwiper from "../../shared/DSwiper";
import { SwiperSlide } from "swiper/react";
import { brandSlider } from "../../description/home.description";

const MainWrapper = styled(DBox)(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: `${theme.palette.text.main}33`,
  },
  "& .MuiBox-root:not(a)": {
    padding: "51px 65px",
    border: `1px solid ${theme.palette.text.main}33`,
    borderTop: 0,
    borderBottom: 0,
  },
  "& .swiper": {
    "& .swiper-wrapper": {
      alignItems: "center",
      "& .MuiBox-root": {
        opacity: 0.35,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          opacity: 1,
        },
        "& img": {
          maxHeight: 40,
          maxWidth: 110,
          objectFit: "contain",
        },
      },
    },
  },
}));

const TrustedBy = () => {
  return (
    <MainWrapper>
      <DContainer maxWidth="xl">
        <DBox>
          <DGrid container sx={{ alignItems: "center" }}>
            <DGrid xs={12} md={5} lg={3}>
              <DTypography variant="Large" fontWeight={600}>
                Trusted by
                <br /> World leading brands
              </DTypography>
            </DGrid>
            <DGrid xs={12} md={7} lg={9}>
              <DSwiper
                slidesPerView={5}
                loop={true}
                spaceBetween={64}
                autoplay={{
                  duration: 3500,
                }}
              >
                {brandSlider.map((slide, sliderIndex) => {
                  return (
                    <SwiperSlide key={sliderIndex}>
                      <DBox component="a" href="/">
                        <img src={slide?.image} alt="" />
                      </DBox>
                    </SwiperSlide>
                  );
                })}
              </DSwiper>
            </DGrid>
          </DGrid>
        </DBox>
      </DContainer>
    </MainWrapper>
  );
};

export default TrustedBy;
