import caterShopDemo from "../../../assets/cater-shop/PMa.mp4";
import caterShopImageOne from "../../../assets/case-studies/catershop/img-1.png";
import caterShopImageTwo from "../../../assets/case-studies/catershop/img-2.png";
import caterShopImageThree from "../../../assets/case-studies/catershop/img-3.png";
import caterShopVideoPreview from "../../../assets/case-studies/catershop/video.png";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type CaterShopCaseStudyProps = {
  onBack: () => void;
};

const meta = [
  { label: "My role", value: "User research, wireframes, UI design" },
  { label: "Live link", value: "Open site", href: "https://retina-mute-33834276.figma.site" },
  { label: "Year", value: "2024" },
  { label: "Industry", value: "E commerce" },
];

export function CaterShopCaseStudy({ onBack }: CaterShopCaseStudyProps) {
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
          02 / 03
        </p>
      </header>

      <div className="mx-auto mt-[20px] flex w-full max-w-[640px] flex-col gap-[48px]">
        <section className="flex flex-col gap-[22px]" aria-labelledby="cater-shop-title">
          <div className="flex flex-col gap-[4px]">
            <h1
              id="cater-shop-title"
              className="font-['Inter',sans-serif] text-[28px] font-normal leading-[1] tracking-[-0.03em] text-black sm:text-[32px]"
            >
              Cater Shop
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
                  Cater Shop is an accessible e-commerce experience designed to make online shopping more inclusive
                  for people who are blind or visually impaired. The project reimagines how users interact with
                  digital storefronts by placing accessibility at the core of the shopping experience.
                </p>
                <p>
                  The concept explores how voice interaction, keyboard navigation, and screen reader support can work
                  together to create a seamless browsing experience. From discovering products to completing a purchase,
                  every interaction was designed to reduce barriers and give users greater independence while shopping
                  online.
                </p>
                <p>
                  To support this experience, I incorporated voice commands for hands-free navigation, text-to-speech
                  feedback that announces interface elements, and comprehensive keyboard controls that allow users to
                  move through the website efficiently.
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
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-[6px] rainbow-hover"
                      >
                        {item.value}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-[13px] stroke-[1.8] transition-transform duration-200 group-hover:translate-x-[1px] group-hover:translate-y-[-1px]"
                        />
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="flex flex-col gap-[18px]" aria-label="Cater Shop visuals">
          <figure className="w-full overflow-hidden bg-[#f3f3f3]">
            <video
              src={caterShopDemo}
              className="block h-auto w-full"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </figure>

          <div className="mb-[18px] pt-[4px]">
            <p className="font-['DM_Mono',sans-serif] text-[12px] uppercase leading-[1.2] tracking-[0.017em] text-[rgba(0,0,0,0.4)]">
              Voice-Guided Navigation
            </p>
            <div className="mt-[4px] space-y-[18px] font-['Inter',sans-serif] text-[14px] leading-[1.55] tracking-[-0.01em] text-[rgba(0,0,0,0.72)]">
              <p>
                Cater Shop was designed to make online shopping more accessible for people who are blind or visually
                impaired. To support independent navigation, the experience combines voice guidance, text-to-speech,
                and keyboard interactions, allowing users to explore the website without relying solely on visual cues.
              </p>
              <p>
                Once voice guidance is activated, a persistent voice assistant appears in the navigation bar, providing
                contextual instructions and reading interface elements as users move through the experience. This
                creates a consistent point of reference throughout the shopping journey.
              </p>
            </div>
          </div>

          <figure className="w-full overflow-hidden bg-[#f3f3f3]">
            <img
              src={caterShopVideoPreview}
              alt="Cater Shop interface preview"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="w-full overflow-hidden bg-[#f3f3f3]">
            <img
              src={caterShopImageOne}
              alt="Cater Shop accessible shopping interface"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="w-full overflow-hidden bg-[#f3f3f3]">
            <img
              src={caterShopImageTwo}
              alt="Cater Shop product browsing interface"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="w-full overflow-hidden bg-[#f3f3f3]">
            <img
              src={caterShopImageThree}
              alt="Cater Shop checkout and accessibility interface"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="mb-[18px] pt-[4px]">
            <p className="font-['DM_Mono',sans-serif] text-[12px] uppercase leading-[1.2] tracking-[0.017em] text-[rgba(0,0,0,0.4)]">
              Conclusion
            </p>
            <p className="mt-[4px] font-['Inter',sans-serif] text-[14px] leading-[1.55] tracking-[-0.01em] text-[rgba(0,0,0,0.72)]">
              The voice assistant gives users greater control over how they interact with the interface. It can read
              page content aloud, pause narration, skip to the next section, and adjust the reading volume using simple
              voice commands. By providing continuous guidance, users can browse products, understand page content, and
              complete tasks with greater confidence and independence.
            </p>
          </div>
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
