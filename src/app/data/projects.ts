import virtualCover from "../../../assets/virtual/virtual-img.png";
import virtualDemo from "../../../assets/virtual/virtual.mp4";
import alorsCover from "../../../assets/alors/image 1134.png";
import alorsDemo from "../../../assets/alors/alors.mp4";
import portfolioCover from "../../../assets/mini-portfolio/cover.png";
import portfolioDemo from "../../../assets/mini-portfolio/layout2.mp4";
import brimCover from "../../../assets/brim/cover.png";
import brimDemo from "../../../assets/brim/brim.mp4";
import radioCover from "../../../assets/radio/cover.png";
import radioDemo from "../../../assets/radio/framer.mp4";
import shopEasyCover from "../../../assets/ShopEasy/cover.png";
import shopEasyDemo from "../../../assets/ShopEasy/video.mp4";
import lettersCover from "../../../assets/letters/COVER.png";
import lettersDemo from "../../../assets/letters/Letters (stage 8).mp4";
import garageCover from "../../../assets/garagw/35.png";
import bistroCover from "../../../assets/bistro-dev/cover.png";
import bistroDemo from "../../../assets/bistro-dev/bistro.mp4";
import candiCover from "../../../assets/candi/cover.png";
import candiDemo from "../../../assets/candi/candi.mp4";
import energyDemo from "../../../assets/energy/movie.mp4";
import nigerianLiteratureDemo from "../../../assets/tools/Nigerian-literature.mp4";
import vibeProjectsDemo from "../../../assets/tools/Vibecoded-projects.mp4";
import photoWallDemo from "../../../assets/tools/photo-wall.mp4";
import plannerDemo from "../../../assets/tools/planner.mp4";
import colorsDemo from "../../../assets/tools/colors.mp4";
import mapinduziCover from "../../../assets/mapinduzi/image 1135.png";
import mapinduziDemo from "../../../assets/mapinduzi/mapinduzi.mp4";
import caterShopCover from "../../../assets/cater-shop/cover.png";
import caterShopDemo from "../../../assets/cater-shop/PMa.mp4";

export type ProjectCategory = "Case Studies" | "Design" | "No-code" | "AI Prototypes";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export type Project = {
  id: number;
  title: string;
  role: string;
  year: string;
  category: ProjectCategory;
  description: string;
  cover: ProjectMedia;
  media?: ProjectMedia[];
  liveLink: string;
};

export const workFilters = ["All", "Case Studies", "Design", "No-code", "AI Prototypes"] as const;

export const projects: Project[] = [
  {
    id: 6,
    title: "Shop Easy",
    role: "Design, UX & Research",
    year: "2024",
    category: "Case Studies",
    description: "A fashion ecommerce case study focused on clearer discovery, smoother browsing, and easier purchase decisions.",
    cover: { type: "image", src: shopEasyCover, alt: "Shop Easy case study cover" },
    media: [{ type: "video", src: shopEasyDemo, alt: "Shop Easy case study demo" }],
    liveLink: "https://www.behance.net/gallery/193734369/ShopEasy-Fashion-made-effortless",
  },
  {
    id: 2,
    title: "Alors",
    role: "Creative Direction & Copy",
    year: "2026",
    category: "Design",
    description: "A visual website direction for a lifestyle brand, focused on tone, layout, and launch-ready storytelling.",
    cover: { type: "image", src: alorsCover, alt: "Alors website cover" },
    media: [{ type: "video", src: alorsDemo, alt: "Alors website demo" }],
    liveLink: "https://alors.framer.website/",
  },
  {
    id: 1,
    title: "Virtual",
    role: "Framer Development",
    year: "2025",
    category: "No-code",
    description: "A Framer-built virtual conference site with structured event content and responsive marketing pages.",
    cover: { type: "image", src: virtualCover, alt: "Virtual website cover" },
    media: [{ type: "video", src: virtualDemo, alt: "Virtual website demo" }],
    liveLink: "https://virtual-conference.framer.website/",
  },
  {
    id: 7,
    title: "Letters",
    role: "Design, UX & Research",
    year: "2024",
    category: "Case Studies",
    description: "A design case study exploring written communication, interface clarity, and user-centered product decisions.",
    cover: { type: "image", src: lettersCover, alt: "Letters case study cover" },
    media: [{ type: "video", src: lettersDemo, alt: "Letters case study demo" }],
    liveLink: "https://www.behance.net/gallery/208405475/Letters",
  },
  {
    id: 4,
    title: "Brim Studios",
    role: "Creative Direction",
    year: "2026",
    category: "Design",
    description: "A studio website direction built around strong art direction, spatial composition, and polished digital presence.",
    cover: { type: "image", src: brimCover, alt: "Brim Studios website cover" },
    media: [{ type: "video", src: brimDemo, alt: "Brim Studios website demo" }],
    liveLink: "https://tothebrim.studio/",
  },
  {
    id: 18,
    title: "Cater Shop",
    role: "Web Design & AI Development",
    year: "2024",
    category: "AI Prototypes",
    description: "An accessible web design and AI-assisted build for browsing catering options with clearer decision paths.",
    cover: { type: "image", src: caterShopCover, alt: "Cater Shop website cover" },
    media: [{ type: "video", src: caterShopDemo, alt: "Cater Shop website demo" }],
    liveLink: "https://retina-mute-33834276.figma.site",
  },
  {
    id: 3,
    title: "Portfolio v.1",
    role: "Design & Development",
    year: "2025",
    category: "No-code",
    description: "A previous personal portfolio exploring visual structure, project presentation, and responsive Framer delivery.",
    cover: { type: "image", src: portfolioCover, alt: "Portfolio v.1 cover" },
    media: [{ type: "video", src: portfolioDemo, alt: "Portfolio v.1 demo" }],
    liveLink: "https://florence-eze-portfolio.framer.website/",
  },
  {
    id: 5,
    title: "Radio",
    role: "Framer Development",
    year: "2025",
    category: "No-code",
    description: "A podcast website built in Framer with clean content hierarchy and responsive listening touchpoints.",
    cover: { type: "image", src: radioCover, alt: "Radio website cover" },
    media: [{ type: "video", src: radioDemo, alt: "Radio website demo" }],
    liveLink: "https://podcastnew.framer.website",
  },
  {
    id: 8,
    title: "The Garage",
    role: "Design, UX & Research",
    year: "2024",
    category: "Case Studies",
    description: "An ecommerce website case study for browsing, comparing, and choosing automotive products more confidently.",
    cover: { type: "image", src: garageCover, alt: "The Garage case study cover" },
    liveLink: "https://www.behance.net/gallery/208239553/The-Garage-An-Ecommerce-website",
  },
  {
    id: 9,
    title: "Bistro",
    role: "Webflow Development",
    year: "2025",
    category: "No-code",
    description: "A restaurant website built in Webflow with menu storytelling, service details, and responsive page structure.",
    cover: { type: "image", src: bistroCover, alt: "Bistro website cover" },
    media: [{ type: "video", src: bistroDemo, alt: "Bistro website demo" }],
    liveLink: "https://bistroblisskitchen.webflow.io",
  },
  {
    id: 10,
    title: "Candi",
    role: "Framer Development",
    year: "2026",
    category: "No-code",
    description: "A Framer website with bold product presentation, structured sections, and launch-ready responsive pages.",
    cover: { type: "image", src: candiCover, alt: "Candi website cover" },
    media: [{ type: "video", src: candiDemo, alt: "Candi website demo" }],
    liveLink: "https://candii-web.framer.website",
  },
  {
    id: 11,
    title: "Energy",
    role: "Design & Development",
    year: "2026",
    category: "No-code",
    description: "A Framer website design and build for an energy brand with motion-led product storytelling.",
    cover: { type: "video", src: energyDemo, alt: "Energy website preview" },
    media: [{ type: "video", src: energyDemo, alt: "Energy website demo" }],
    liveLink: "https://energy-website-design.framer.website/",
  },
  {
    id: 12,
    title: "Nigerian Literature",
    role: "Research Tool & AI",
    year: "2026",
    category: "AI Prototypes",
    description: "An AI-assisted literature discovery tool for exploring Nigerian authors, books, and cultural references.",
    cover: { type: "video", src: nigerianLiteratureDemo, alt: "Nigerian Literature prototype preview" },
    media: [{ type: "video", src: nigerianLiteratureDemo, alt: "Nigerian Literature prototype demo" }],
    liveLink: "https://nigerian-lit.vercel.app/",
  },
  {
    id: 13,
    title: "Vibe-coded Projects",
    role: "20 Days of Vibe Coding",
    year: "2026",
    category: "AI Prototypes",
    description: "A collection of AI-assisted product experiments exploring fast interface ideation and working prototypes.",
    cover: { type: "video", src: vibeProjectsDemo, alt: "Vibe-coded projects preview" },
    media: [{ type: "video", src: vibeProjectsDemo, alt: "Vibe-coded projects demo" }],
    liveLink: "https://vibe-coding.vercel.app/",
  },
  {
    id: 14,
    title: "Photo Wall",
    role: "AI Tool",
    year: "2026",
    category: "AI Prototypes",
    description: "An AI-assisted visual tool for arranging image collections into a fast, interactive photo wall.",
    cover: { type: "video", src: photoWallDemo, alt: "Photo Wall prototype preview" },
    media: [{ type: "video", src: photoWallDemo, alt: "Photo Wall prototype demo" }],
    liveLink: "https://photo-wall-teal.vercel.app/",
  },
  {
    id: 15,
    title: "Notes Planner",
    role: "Research Tool & AI",
    year: "2026",
    category: "AI Prototypes",
    description: "A lightweight planning tool for capturing notes, organizing tasks, and turning ideas into action.",
    cover: { type: "video", src: plannerDemo, alt: "Notes Planner prototype preview" },
    media: [{ type: "video", src: plannerDemo, alt: "Notes Planner prototype demo" }],
    liveLink: "https://note-ss.vercel.app",
  },
  {
    id: 16,
    title: "Colors",
    role: "Research Tool & AI",
    year: "2026",
    category: "AI Prototypes",
    description: "A color exploration tool for testing palettes, comparing combinations, and speeding up visual decisions.",
    cover: { type: "video", src: colorsDemo, alt: "Colors prototype preview" },
    media: [{ type: "video", src: colorsDemo, alt: "Colors prototype demo" }],
    liveLink: "https://co-lors.vercel.app",
  },
  {
    id: 17,
    title: "Mapinduzi",
    role: "Design & Creative Direction",
    year: "2026",
    category: "Design",
    description: "A creative website direction centered on bold visual language, campaign storytelling, and digital presence.",
    cover: { type: "image", src: mapinduziCover, alt: "Mapinduzi website cover" },
    media: [{ type: "video", src: mapinduziDemo, alt: "Mapinduzi website demo" }],
    liveLink: "https://cotdigtest35.host/",
  },
];

export const projectIds = projects.map((project) => project.id);

export function getNextProjectId(currentId: number) {
  const currentIndex = projects.findIndex((project) => project.id === currentId);
  if (currentIndex === -1) return projects[0]?.id ?? currentId;
  return projects[(currentIndex + 1) % projects.length].id;
}

export function getPrevProjectId(currentId: number) {
  const currentIndex = projects.findIndex((project) => project.id === currentId);
  if (currentIndex === -1) return projects[0]?.id ?? currentId;
  return projects[(currentIndex - 1 + projects.length) % projects.length].id;
}
