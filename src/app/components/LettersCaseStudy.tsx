import lettersVideo from "../../../assets/case-studies/letters/letters.mp4";
import lettersVideoPoster from "../../../assets/case-studies/letters/video.png";
import lettersImageOne from "../../../assets/case-studies/letters/img1.png";
import lettersImageTwo from "../../../assets/case-studies/letters/img2.png";
import lettersImageThree from "../../../assets/case-studies/letters/img3.png";
import lettersImageFour from "../../../assets/case-studies/letters/img4.png";
import lettersImageFive from "../../../assets/case-studies/letters/img5.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type LettersCaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: lettersVideo,
    poster: lettersVideoPoster,
    alt: "Letters writing and splash screen mobile interface",
  },
  {
    type: "image",
    src: lettersImageOne,
    alt: "Letters AI-assisted writing mobile interface",
  },
  {
    type: "image",
    src: lettersImageTwo,
    alt: "Letters social feed and letter detail mobile screens",
  },
  {
    type: "image",
    src: lettersImageThree,
    alt: "Letters photo upload mobile interface",
  },
  {
    type: "image",
    src: lettersImageFour,
    alt: "Letters writing assistant and voice input mobile screens",
  },
  {
    type: "image",
    src: lettersImageFive,
    alt: "Letters writing template selection mobile screens",
  },
];

const paragraphs = [
  "Letters is a social platform designed to bring intention back to online communication through beautifully crafted long-form writing. Inspired by the personal nature of handwritten letters, the platform encourages users to share thoughtful stories, and reflections.",
  "The project explored how social media could move beyond short-form updates by creating a space where people can express themselves with greater depth and authenticity. Every post is written as a letter addressed to someone, making each interaction feel more personal and meaningful.",
  "To support the writing experience, I designed AI-assisted features that help users refine their ideas with suggestions for tone, structure, and clarity.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "User research, wireframing, UI design, Prototyping" },
  { label: "Industry", value: "Social Networking" },
];

export function LettersCaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: LettersCaseStudyProps) {
  return (
    <CaseStudySheet
      title="Letters"
      role="UX Designer"
      year="2024"
      intro="A social platform designed to bring intention back to online communication through slower, more expressive writing."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Cater Shop", onClick: onOpenNextProject }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
