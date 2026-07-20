import brimDemo from "../../../assets/brim/brim.mp4";
import brimCover from "../../../assets/brim/cover.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type BrimStudiosCaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: brimDemo,
    poster: brimCover,
    alt: "Brim Studios website demo",
    fit: "cover",
  },
  {
    type: "image",
    src: brimCover,
    alt: "Brim Studios website cover",
    fit: "cover",
  },
];

const paragraphs = [
  "Brim Studios is a creative studio website concept that explores how strong art direction and thoughtful digital design can shape a memorable online presence. The project focuses on creating an experience that feels refined, immersive, and visually confident while showcasing creative work with clarity.",
  "The design was driven by spatial composition, typography, and visual rhythm, using generous whitespace and bold imagery to establish a premium aesthetic. Every section was carefully considered to create a natural flow between content, allowing the work to remain the focal point while reinforcing the studio's creative identity.",
  "The final direction combines editorial-inspired layouts with a modern visual language, resulting in a website that feels both expressive and functional. Rather than overwhelming visitors with visual effects, the experience relies on balance, hierarchy, and intentional composition to communicate creativity with confidence.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "Creative direction in collaboration with Brim Studios" },
  { label: "Industry", value: "Creative Studio" },
  { label: "Live link", value: "tothebrim.studio", href: "https://tothebrim.studio/" },
];

export function BrimStudiosCaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: BrimStudiosCaseStudyProps) {
  return (
    <CaseStudySheet
      title="Brim Studios"
      role="Creative Direction"
      year="2026"
      intro="A creative studio website concept shaped by strong art direction, spatial composition, and refined digital presence."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Virtual Conference", onClick: onOpenNextProject }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
