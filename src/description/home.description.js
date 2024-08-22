import Preview1 from "../assets/image/png/preview-1.jpg";
import Preview2 from "../assets/image/png/preview-2.jpg";
import Preview3 from "../assets/image/png/preview-3.jpg";
import Preview4 from "../assets/image/png/preview-4.jpg";
import Preview5 from "../assets/image/png/preview-5.jpg";
import Preview6 from "../assets/image/png/preview-6.jpg";
import Preview7 from "../assets/image/png/preview-7.jpg";
import Preview8 from "../assets/image/png/preview-8.jpg";
import { BehanceIcon, DribbleIcon, MailIcon } from "../assets/image/svg/icon";
import Brand1 from "../assets/image/png/brand_01.png";
import Brand2 from "../assets/image/png/brand_02.png";
import Brand3 from "../assets/image/png/brand_03.png";
import Brand4 from "../assets/image/png/brand_04.png";
import Brand5 from "../assets/image/png/brand_05.png";

export const menuList = [
  {
    label: "Home",
    homeMenu: true,
    previewList: [
      {
        src: Preview1,
        label: "Freelancer",
      },
      {
        src: Preview2,
        label: "Fashion Designer",
      },
      {
        src: Preview3,
        label: "photographer",
      },
      {
        src: Preview4,
        label: "interface designer",
      },
      {
        src: Preview5,
        label: "web designer",
      },
      {
        src: Preview6,
        label: "slider classic",
      },
      {
        src: Preview7,
        label: "slider elegant",
      },
      {
        src: Preview8,
        label: "slider metro",
      },
    ],
  },
  {
    label: "about me",
  },
  {
    label: "services",
    subList: ["service", "service detail"],
  },
  {
    label: "portfolio",
    subList: [
      "portfolio",
      "portfolio details",
      "portfolio details 02",
      "portfolio details 03",
    ],
  },
  {
    label: "blog",
    subList: ["blog list", "blog sidebar", "blog details", "blog details 02"],
  },
  {
    label: "contact",
  },
];

export const socialIcon = [
  {
    icon: <MailIcon />,
  },
  {
    icon: <DribbleIcon />,
  },
  {
    icon: <BehanceIcon />,
  },
];

export const brandSlider = [
  {
    image: Brand1,
  },
  {
    image: Brand2,
  },
  {
    image: Brand3,
  },
  {
    image: Brand4,
  },
  {
    image: Brand5,
  },
  {
    image: Brand1,
  },
  {
    image: Brand2,
  },
  {
    image: Brand3,
  },
  {
    image: Brand4,
  },
  {
    image: Brand5,
  },
];

export const accordion = [
  {
    head: "UI/UX Design",
  },
  {
    head: "Design Systems",
  },
  {
    head: "Website Design",
  },
  {
    head: "Branding",
  },
];
