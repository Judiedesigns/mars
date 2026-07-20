import caterShopDemo from "../../../assets/cater-shop/PMa.mp4";
import caterShopImageOne from "../../../assets/case-studies/catershop/img-1.png";
import caterShopImageTwo from "../../../assets/case-studies/catershop/img-2.png";
import caterShopImageThree from "../../../assets/case-studies/catershop/img-3.png";
import caterShopVideoPreview from "../../../assets/case-studies/catershop/video.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type CaterShopCaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "video",
    src: caterShopDemo,
    poster: caterShopVideoPreview,
    alt: "Cater Shop accessible shopping website demo",
    fit: "cover",
  },
  {
    type: "image",
    src: caterShopVideoPreview,
    alt: "Cater Shop interface preview",
    fit: "cover",
  },
  {
    type: "image",
    src: caterShopImageOne,
    alt: "Cater Shop accessible shopping interface",
  },
  {
    type: "image",
    src: caterShopImageTwo,
    alt: "Cater Shop product browsing interface",
  },
  {
    type: "image",
    src: caterShopImageThree,
    alt: "Cater Shop checkout and accessibility interface",
  },
];

const paragraphs = [
  "Cater Shop is an accessible e-commerce experience designed to make online shopping more inclusive for people who are blind or visually impaired. The project reimagines how users interact with digital storefronts by placing accessibility at the core of the shopping experience.",
  "The concept explores how voice interaction, keyboard navigation, and screen reader support can work together to create a seamless browsing experience. From discovering products to completing a purchase, every interaction was designed to reduce barriers and give users greater independence while shopping online.",
  "Once voice guidance is activated, a persistent voice assistant appears in the navigation bar, providing contextual instructions and reading interface elements as users move through the experience.",
  "The voice assistant can read page content aloud, pause narration, skip to the next section, and adjust the reading volume using simple voice commands.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "User research, wireframes, UI design" },
  { label: "Live link", value: "Open site", href: "https://retina-mute-33834276.figma.site" },
  { label: "Industry", value: "E commerce" },
];

export function CaterShopCaseStudy({
  onBack,
  onOpenNextProject,
  hasWorkBackdrop,
  onDragProgressChange,
}: CaterShopCaseStudyProps) {
  return (
    <CaseStudySheet
      title="Cater Shop"
      role="UX Designer"
      year="2024"
      intro="An accessible e-commerce experience designed to make online shopping more inclusive."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Brim Studios", onClick: onOpenNextProject }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
