import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";

const DSwiper = ({ ...props }) => {
  return <Swiper modules={[Navigation, Autoplay, Pagination]} {...props} />;
};

export default DSwiper;
