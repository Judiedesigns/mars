import virtualDemo from "../../../assets/virtual/virtual.mp4";
import virtualCover from "../../../assets/virtual/virtual-img.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type VirtualConferenceCaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: virtualDemo,
    poster: virtualCover,
    alt: "Virtual Conference Framer website demo",
    fit: "cover",
  },
  {
    type: "image",
    src: virtualCover,
    alt: "Virtual Conference website cover",
    fit: "cover",
  },
];

const paragraphs = [
  "Virtual Conference is a responsive marketing website built in Framer for an online conference experience. My role focused on translating the approved design into a fully functional website while ensuring consistency across pages and devices.",
  "I developed the site using Framer, recreating the layouts with attention to spacing, responsiveness, and interactive elements. The build was structured to support event content such as speaker information, schedules, and registration, while maintaining a smooth and polished user experience.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "Framer Development" },
  { label: "Stack", value: "Framer" },
  { label: "Live link", value: "virtual-conference.framer.website", href: "https://virtual-conference.framer.website/" },
];

export function VirtualConferenceCaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: VirtualConferenceCaseStudyProps) {
  return (
    <CaseStudySheet
      title="Virtual Conference"
      role="Framer Development"
      year="2025"
      intro="A responsive Framer marketing website for an online conference experience."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Random Notes", onClick: onOpenNextProject }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
