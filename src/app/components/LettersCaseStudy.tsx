import lettersVideoPreview from "../../../assets/case-studies/letters/video.png";
import lettersImageOne from "../../../assets/case-studies/letters/img1.png";
import lettersImageTwo from "../../../assets/case-studies/letters/img2.png";
import lettersImageThree from "../../../assets/case-studies/letters/img3.png";
import lettersImageFour from "../../../assets/case-studies/letters/img4.png";
import lettersImageFive from "../../../assets/case-studies/letters/img5.png";
import caterShopCover from "../../../assets/cater-shop/cover.png";
import { ArrowLeft } from "lucide-react";

type LettersCaseStudyProps = {
  onBack: () => void;
  onOpenNextProject?: () => void;
};

const meta = [
  { label: "My role", value: "User research, wireframing, UI design, prototyping" },
  { label: "Year", value: "2024" },
  { label: "Industry", value: "Social networking" },
];

const visuals = [
  {
    src: lettersVideoPreview,
    alt: "Letters writing and splash screen mobile interface",
  },
  {
    src: lettersImageOne,
    alt: "Letters AI-assisted writing mobile interface",
  },
  {
    src: lettersImageTwo,
    alt: "Letters social feed and letter detail mobile screens",
  },
  {
    src: lettersImageThree,
    alt: "Letters photo upload mobile interface",
  },
  {
    src: lettersImageFour,
    alt: "Letters writing assistant and voice input mobile screens",
  },
  {
    src: lettersImageFive,
    alt: "Letters writing template selection mobile screens",
  },
];

function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="w-full overflow-hidden bg-[#f3f3f3]">
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

export function LettersCaseStudy({ onBack, onOpenNextProject }: LettersCaseStudyProps) {
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
      </header>

      <div className="mx-auto mt-[20px] flex w-full max-w-[640px] flex-col gap-[48px]">
        <section className="flex flex-col gap-[22px]" aria-labelledby="letters-title">
          <div className="flex flex-col gap-[4px]">
            <h1
              id="letters-title"
              className="font-['Inter',sans-serif] text-[28px] font-normal leading-[1] tracking-[-0.03em] text-black sm:text-[32px]"
            >
              Letters
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
                  Letters is a social platform designed to bring intention back to online communication through
                  beautifully crafted long-form writing. Inspired by the personal nature of handwritten letters,
                  the platform encourages users to share thoughtful stories and reflections.
                </p>
                <p>
                  The project explored how social media could move beyond short-form updates by creating a space
                  where people can express themselves with greater depth and authenticity. Every post is written as
                  a letter addressed to someone, making each interaction feel more personal and meaningful.
                </p>
                <p>
                  To support the writing experience, I designed AI-assisted features that help users refine their
                  ideas with suggestions for tone, structure, and clarity while preserving their unique voice. Each
                  profile serves as a curated collection of letters, presented in a journal-like layout.
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

        <section className="flex flex-col gap-[18px]" aria-label="Letters visuals">
          {visuals.map((visual) => (
            <CaseStudyImage key={visual.src} src={visual.src} alt={visual.alt} />
          ))}
        </section>

        <section className="pt-[14px]" aria-labelledby="next-project">
          <button
            type="button"
            onClick={onOpenNextProject}
            className="group grid w-full text-left transition-transform duration-150 ease-out active:scale-[0.985]"
          >
            <div className="relative h-[280px] overflow-hidden rounded-[4px] bg-[#f3f3f3] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.015] sm:h-[320px]">
              <img
                src={caterShopCover}
                alt="Cater Shop website preview"
                className="size-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <span
                id="next-project"
                className="absolute left-[18px] bottom-[18px] font-['DM_Mono',sans-serif] text-[13px] uppercase leading-none tracking-[0.017em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] transition-colors duration-200 sm:text-[14px]"
              >
                Next project
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
