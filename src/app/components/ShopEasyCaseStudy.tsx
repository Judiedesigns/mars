import shopEasyHero from "../../assets/case-studies/shop-easy/hero.gif";
import shopEasyBrand from "../../assets/case-studies/shop-easy/brand.png";
import shopEasyScreens from "../../assets/case-studies/shop-easy/screens.png";
import shopEasyOnboarding from "../../assets/case-studies/shop-easy/onboarding.png";
import shopEasyPrototypePreview from "../../assets/case-studies/shop-easy/prototype-preview.png";
import lettersPhoneOne from "../../assets/case-studies/shop-easy/letters-iphone-1.png";
import lettersPhoneTwo from "../../assets/case-studies/shop-easy/letters-iphone-2.png";
import { ArrowLeft } from "lucide-react";

type ShopEasyCaseStudyProps = {
  onBack: () => void;
  onOpenLetters?: () => void;
};

const meta = [
  { label: "My role", value: "User research, wireframes, UI design" },
  { label: "Year", value: "2024" },
  { label: "Industry", value: "E commerce" },
];

function CaseStudyImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`w-full overflow-hidden bg-white ${className}`}>
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

export function ShopEasyCaseStudy({ onBack, onOpenLetters }: ShopEasyCaseStudyProps) {
  return (
    <main className="min-h-screen bg-white px-[20px] pb-[64px] pt-[16px] text-[#2e2e2e] sm:px-[24px]">
      <header className="sticky top-0 z-20 mx-auto flex h-[64px] w-full max-w-[855px] items-start justify-between bg-white/90 pt-[16px] backdrop-blur-md">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-[9px] text-left transition-transform duration-150 ease-out active:scale-[0.97]"
          aria-label="Back to work"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-[16px] stroke-[1.8] text-[#5d5d5d] transition-colors duration-200 group-hover:text-[#1a1a1a]"
          />
          <span className="font-['Inter',sans-serif] text-[13px] font-normal lowercase tracking-[0.026em] text-[#5d5d5d] transition-colors duration-200 group-hover:text-[#1a1a1a] sm:text-[14px]">
            work
          </span>
        </button>
        <p className="font-['DM_Mono',sans-serif] text-[13px] leading-[18px] tracking-[0.02em] text-[#5d5d5d]">
          01 / 03
        </p>
      </header>

      <div className="mx-auto mt-[20px] flex w-full max-w-[640px] flex-col gap-[48px]">
        <section className="flex flex-col gap-[22px]" aria-labelledby="shop-easy-title">
          <div className="flex flex-col gap-[4px]">
            <h1
              id="shop-easy-title"
              className="font-['Inter',sans-serif] text-[28px] font-normal leading-[1] tracking-[-0.03em] text-black sm:text-[32px]"
            >
              ShopEasy
            </h1>
            <p className="font-['DM_Mono',sans-serif] text-[14px] uppercase leading-[21px] tracking-[-0.011em] text-[#5d5d5d]">
              UX Designer
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[4px] border-t border-[rgba(34,34,34,0.06)] pt-[9px]">
              <p className="font-['DM_Mono',sans-serif] text-[12px] uppercase leading-[1.2] tracking-[0.017em] text-[rgba(0,0,0,0.4)]">
                Project
              </p>
              <div className="space-y-[18px] font-['Inter',sans-serif] text-[14px] leading-[1.55] tracking-[-0.01em] text-[rgba(0,0,0,0.72)]">
                <p>
                  ShopEasy is a mobile e-commerce experience designed to make online shopping simpler, faster,
                  and more personalized.
                </p>
                <p>
                  The product focuses on helping people discover relevant products, browse with ease, and complete
                  purchases with minimal friction. The project began with understanding how people interact with
                  existing e-commerce platforms and where those experiences often fall short.
                </p>
                <p>
                  Through user interviews and competitive analysis, I explored common shopping behaviors, pain
                  points, and the features users value most. Using these insights, I brainstormed solutions,
                  sketched early concepts, and translated the strongest ideas into wireframes before refining
                  them into high-fidelity designs.
                </p>
              </div>
            </div>

            <dl className="flex flex-col gap-[12px]">
              {meta.map((item, index) => (
                <div
                  key={item.label}
                  className={index === 0 ? "border-t border-[rgba(34,34,34,0.06)] pt-[9px]" : ""}
                >
                  <dt className="font-['DM_Mono',sans-serif] text-[12px] uppercase leading-[1.2] tracking-[0.017em] text-[rgba(26,26,26,0.5)]">
                    {item.label}
                  </dt>
                  <dd className="mt-[2px] font-['Inter',sans-serif] text-[14px] leading-[1.45] tracking-[-0.01em] text-[rgba(0,0,0,0.72)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="flex flex-col gap-[18px]" aria-label="ShopEasy visuals">
          <CaseStudyImage
            src={shopEasyHero}
            alt="ShopEasy fashion shopping mobile screens"
            className="bg-white"
          />

          <CaseStudyImage
            src={shopEasyBrand}
            alt="ShopEasy clothing brand identity and mobile screens"
          />

          <CaseStudyImage
            src={shopEasyScreens}
            alt="ShopEasy product and account interface screens"
          />

          <CaseStudyImage
            src={shopEasyOnboarding}
            alt="ShopEasy onboarding and login screens"
            className="mb-[8px]"
          />

          <div className="mb-[18px] pt-[4px]">
            <p className="font-['DM_Mono',sans-serif] text-[12px] uppercase leading-[1.2] tracking-[0.017em] text-[rgba(0,0,0,0.4)]">
              Conclusion
            </p>
            <p className="mt-[4px] font-['Inter',sans-serif] text-[14px] leading-[1.55] tracking-[-0.01em] text-[rgba(0,0,0,0.72)]">
              Using these insights, I brainstormed solutions, sketched early concepts, and translated the strongest
              ideas into wireframes before refining them into high-fidelity designs. The experience evolved through
              prototyping, usability testing, and several rounds of iteration.
            </p>
          </div>

          <CaseStudyImage
            src={shopEasyPrototypePreview}
            alt="ShopEasy search and sale mobile prototype screens"
            className="mb-[8px] bg-[#f9fafb]"
          />
        </section>

        <section className="border-t border-[rgba(34,34,34,0.08)] pt-[32px]" aria-labelledby="next-case-study">
          <button
            type="button"
            onClick={onOpenLetters}
            className="group grid w-full text-left transition-transform duration-150 ease-out active:scale-[0.985]"
          >
            <div className="relative h-[280px] overflow-hidden rounded-[4px] bg-[#f3f3f3] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.015] sm:h-[320px]">
              <img
                src={lettersPhoneOne}
                alt="Letters mobile writing interface"
                className="absolute bottom-[-14px] left-[20%] h-[78%] w-auto transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[-4px] sm:left-[24%]"
                loading="lazy"
                decoding="async"
              />
              <img
                src={lettersPhoneTwo}
                alt="Letters mobile conversation interface"
                className="absolute bottom-[-12px] right-[18%] h-[88%] w-auto transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[-7px] sm:right-[22%]"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute left-[18px] top-[18px] font-['DM_Mono',sans-serif] text-[13px] uppercase leading-none tracking-[0.017em] text-[rgba(0,0,0,0.48)] transition-colors duration-200 group-hover:text-[rgba(0,0,0,0.62)] sm:text-[14px]">
                Next case study
              </span>
            </div>
          </button>
        </section>

        <footer className="flex flex-col items-center justify-center gap-[24px] pt-[8px]">
          <a
            href="mailto:florencekey22@gmail.com"
            className="rounded-full border border-[rgba(0,0,0,0.6)] px-[24px] py-[12px] font-['DM_Mono',sans-serif] text-[16px] uppercase leading-none tracking-[-0.031em] text-[rgba(0,0,0,0.6)] transition-[border-color,color,transform] duration-200 ease-out hover:border-[#1a1a1a] hover:text-[#1a1a1a] active:scale-[0.97]"
          >
            Let’s work together
          </a>
          <nav aria-label="Case study contact links" className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[8px]">
            <a
              href="mailto:florencekey22@gmail.com"
              className="font-['Inter',sans-serif] text-[14px] tracking-[-0.01em] text-[#1a1a1a] social-link rainbow-hover cursor-pointer"
            >
              Email
            </a>
            <span className="text-[rgba(0,0,0,0.2)] text-[8px]">●</span>
            <a
              href="https://www.behance.net/florenceeze1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter',sans-serif] text-[14px] tracking-[-0.01em] text-[#1a1a1a] social-link rainbow-hover cursor-pointer"
            >
              Behance
            </a>
            <span className="text-[rgba(0,0,0,0.2)] text-[8px]">●</span>
            <a
              href="https://www.linkedin.com/in/florence-eze"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter',sans-serif] text-[14px] tracking-[-0.01em] text-[#1a1a1a] social-link rainbow-hover cursor-pointer"
            >
              LinkedIn
            </a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
