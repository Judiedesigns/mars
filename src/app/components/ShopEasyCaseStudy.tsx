import shopEasyHero from "../../assets/case-studies/shop-easy/hero.gif";
import shopEasyBrand from "../../assets/case-studies/shop-easy/brand.png";
import shopEasyScreens from "../../assets/case-studies/shop-easy/screens.png";
import shopEasyOnboarding from "../../assets/case-studies/shop-easy/onboarding.png";
import shopEasyPrototypePreview from "../../assets/case-studies/shop-easy/prototype-preview.png";
import { CaseStudySheet, type CaseStudyDetail, type CaseStudyVisual } from "./CaseStudySheet";

type ShopEasyCaseStudyProps = {
  onBack: () => void;
  onOpenLetters?: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const visuals: CaseStudyVisual[] = [
  {
    type: "image",
    src: shopEasyHero,
    alt: "ShopEasy fashion shopping mobile screens",
  },
  {
    type: "image",
    src: shopEasyBrand,
    alt: "ShopEasy clothing brand identity and mobile screens",
    fit: "cover",
  },
  {
    type: "image",
    src: shopEasyScreens,
    alt: "ShopEasy product and account interface screens",
  },
  {
    type: "image",
    src: shopEasyOnboarding,
    alt: "ShopEasy onboarding and login screens",
  },
  {
    type: "image",
    src: shopEasyPrototypePreview,
    alt: "ShopEasy search and sale mobile prototype screens",
  },
];

const paragraphs = [
  "ShopEasy is a mobile e-commerce experience designed to make online shopping simpler, faster, and more personalized.",
  "The product focuses on helping people discover relevant products, browse with ease, and complete purchases with minimal friction. The project began with understanding how people interact with existing e-commerce platforms and where those experiences often fall short.",
  "Through user interviews and competitive analysis, I explored common shopping behaviors, pain points, and the features users value most. Using these insights, I brainstormed solutions, sketched early concepts, and translated the strongest ideas into wireframes before refining them into high-fidelity designs.",
  "The experience evolved through prototyping, usability testing, and several rounds of iteration.",
];

const details: CaseStudyDetail[] = [
  { label: "Role", value: "User research, wireframes, UI design" },
  { label: "Industry", value: "E commerce" },
];

export function ShopEasyCaseStudy({
  onBack,
  onOpenLetters,
  hasWorkBackdrop,
  onDragProgressChange,
}: ShopEasyCaseStudyProps) {
  return (
    <CaseStudySheet
      title="Shop Easy"
      role="UX Designer"
      year="2024"
      intro="A mobile e-commerce experience designed to make online shopping simpler, faster, and more personalized."
      paragraphs={paragraphs}
      details={details}
      visuals={visuals}
      nextProject={{ label: "Letters", onClick: onOpenLetters }}
      onBack={onBack}
      hasWorkBackdrop={hasWorkBackdrop}
      onDragProgressChange={onDragProgressChange}
    />
  );
}
