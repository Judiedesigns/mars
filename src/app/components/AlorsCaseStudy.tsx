import alorsDemo from "../../../assets/alors/alors.mp4";
import alorsCover from "../../../assets/alors/image 1134.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type AlorsCaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: alorsDemo,
    poster: alorsCover,
    alt: "Alors lifestyle brand website demo",
    fit: "cover",
  },
  {
    type: "image",
    src: alorsCover,
    alt: "Alors lifestyle brand website cover",
    fit: "cover",
  },
];

const paragraphs = [
  "Alors is a lifestyle brand website concept designed to communicate a refined visual identity through thoughtful storytelling and modern editorial design. The project explores how layout, typography, and copy can work together to create a cohesive and engaging digital experience.",
  "The direction focuses on balancing aesthetics with clarity, using structured layouts, generous spacing, and carefully crafted messaging to guide visitors through the brand story. Every section was designed to feel intentional, supporting both the visual identity and the content without overwhelming either.",
  "The final experience presents a launch-ready website that feels polished, expressive, and aligned with the expectations of a contemporary lifestyle brand.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "Creative Direction, Copy, UI Design" },
  { label: "Live link", value: "alors.framer.website", href: "https://alors.framer.website/" },
];

export function AlorsCaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: AlorsCaseStudyProps) {
  return (
    <CaseStudySheet
      title="Alors"
      role="Creative Direction & Copy"
      year="2026"
      intro="A lifestyle brand website concept shaped through refined storytelling, editorial layout, and clear visual direction."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Portfolio v.1", onClick: onOpenNextProject }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
