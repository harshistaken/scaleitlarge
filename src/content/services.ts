export type ServiceItem = {
  title: string;
  lines: string[];
  imageSrc: string;
  imageAlt: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Short-Form Videos",
    lines: ["Turn your content into scroll -", "stopping clips."],
    imageSrc: "/assets/services/short-form-videos.png",
    imageAlt: "Short-form videos service artwork",
  },
  {
    title: "YouTube Videos",
    lines: ["Raw footage to engaging", "YouTube-ready videos."],
    imageSrc: "/assets/services/youtube-videos.png",
    imageAlt: "YouTube videos service artwork",
  },
  {
    title: "Graphic Design",
    lines: ["Stunning visuals that make your", "brand memorable."],
    imageSrc: "/assets/services/graphic-design.png",
    imageAlt: "Graphic design service artwork",
  },
  {
    title: "Management Services",
    lines: ["Your brand, managed and", "maximized with ease."],
    imageSrc: "/assets/services/management-services.png",
    imageAlt: "Management services artwork",
  },
  {
    title: "AI-Powered Videos",
    lines: ["AI-crafted videos for", "creators who move fast."],
    imageSrc: "/assets/services/ai-powered-videos.png",
    imageAlt: "AI-powered videos service artwork",
  },
  {
    title: "Motion Graphics",
    lines: ["Clean, smooth", "animations for any content."],
    imageSrc: "/assets/services/motion-graphics.png",
    imageAlt: "Motion graphics service artwork",
  },
];
