import portfolioDemo from "../../../assets/mini-portfolio/layout2.mp4";
import portfolioCover from "../../../assets/mini-portfolio/cover.png";
import portfolioDetail from "../../../assets/mini-portfolio/test-1.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type PortfolioV1CaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: portfolioDemo,
    poster: portfolioCover,
    alt: "Portfolio v.1 Framer website demo",
    fit: "cover",
  },
  {
    type: "image",
    src: portfolioCover,
    alt: "Portfolio v.1 website cover",
    fit: "cover",
  },
  {
    type: "image",
    src: portfolioDetail,
    alt: "Portfolio v.1 website layout detail",
    fit: "cover",
  },
];

const paragraphs = [
  "Portfolio v.1 started as a personal learning project and became my first full experience designing and developing a website in Framer.",
  "The goal was to create a simple digital home for my work while learning how to structure pages, handle responsive layouts, and translate portfolio content into a working website.",
  "Looking back, the project helped me understand the gap between making a page look designed and making it feel usable, organized, and ready to share.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "Design & Development" },
  { label: "Stack", value: "Framer" },
  { label: "Live link", value: "florence-eze-portfolio.framer.website", href: "https://florence-eze-portfolio.framer.website/" },
];

export function PortfolioV1CaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: PortfolioV1CaseStudyProps) {
  return (
    <CaseStudySheet
      title="Portfolio v.1"
      role="Design & Development"
      year="2025"
      intro="A first personal portfolio built in Framer while learning how to design and ship a working website."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Radio", onClick: onOpenNextProject }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
