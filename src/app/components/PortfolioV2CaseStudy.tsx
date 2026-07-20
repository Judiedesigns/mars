import portfolioDemo from "../../../assets/portfolio v.2/my video.mp4";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type PortfolioV2CaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: portfolioDemo,
    alt: "Portfolio v.2 website demo",
    fit: "cover",
  },
];

const paragraphs = [
  "Portfolio v.2 is a newer portfolio direction focused on calmer presentation, clearer project hierarchy, and a more refined visual system.",
  "The project explores a more considered way to present selected work, balancing visual polish with straightforward navigation so each project can be understood quickly.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "Design & Development" },
  { label: "Stack", value: "Framer" },
  { label: "Live link", value: "florence-eze-portfolio.framer.website", href: "https://florence-eze-portfolio.framer.website/" },
];

export function PortfolioV2CaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: PortfolioV2CaseStudyProps) {
  return (
    <CaseStudySheet
      title="Portfolio v.2"
      role="Design & Development"
      year="2026"
      intro="A calmer portfolio direction with clearer project hierarchy and a more refined visual system."
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
