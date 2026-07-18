import { useEffect, useRef, useState } from "react";
import img1 from "../../imports/img1.png";
import img2 from "../../imports/img2.png";
import img3 from "../../imports/img3.png";
import img4 from "../../imports/img4.png";
import img5 from "../../imports/img5.png";
import img6 from "../../imports/img6.png";
import slice1 from "../../imports/Slice-1.png";
import img8 from "../../imports/img8.png";
import image10 from "../../imports/image10.png";
import image11 from "../../imports/image11.png";
import img12 from "../../imports/img12.png";

const explorationImages = [
  { src: img8, alt: "ShopEasy onboarding" },
  { src: image11, alt: "E-commerce cart" },
  { src: img5, alt: "Fashion app" },
  { src: img2, alt: "Letter sharing" },
  { src: img6, alt: "Task management" },
  { src: slice1, alt: "Shopping cart" },
  { src: img4, alt: "Photo gallery" },
  { src: img1, alt: "Article reading" },
  { src: image10, alt: "Interest selection" },
  { src: img12, alt: "Product design" },
  { src: img3, alt: "Template selection" },
];

const doubled = [...explorationImages, ...explorationImages];

export function ExplorationsCanvas() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [tickerStarted, setTickerStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || tickerStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTickerStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [tickerStarted]);

  return (
    <section ref={sectionRef} className="pb-[64px] lg:pb-[76px] animate-fade-in stagger-6">
      <div className="border-t border-[rgba(0,0,0,0.06)] pt-[44px] lg:pt-[56px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] mb-[24px] lg:mb-[32px]">
          <div className="sm:col-span-2">
            <h2 className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase opacity-40">
              Explorations
            </h2>
          </div>
        </div>

        <div className="exploration-ticker-viewport relative -mx-[24px] md:-mx-[32px] lg:mx-0 overflow-hidden">
          <div
            role="list"
            aria-label="Exploration archive"
            className={`flex gap-[16px] pl-[24px] md:pl-[32px] lg:pl-0 ticker-animate ${tickerStarted ? "is-running" : ""}`}
            style={{ width: "fit-content" }}
          >
            {doubled.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                role="listitem"
                aria-hidden={index >= explorationImages.length}
                className="flex-shrink-0"
                style={{ width: "70vw", maxWidth: "500px" }}
              >
                <div className="exploration-card bg-[#F2F2F2] w-full p-[12px] rounded-[12px] h-[260px] sm:h-[300px] lg:h-[340px]">
                  <div className="bg-[#efefef] w-full h-full overflow-hidden rounded-[8px]">
                    <img
                      src={tickerStarted ? image.src : undefined}
                      alt={index < explorationImages.length ? image.alt : ""}
                      role={index < explorationImages.length ? undefined : "presentation"}
                      aria-hidden={index < explorationImages.length ? undefined : true}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .ticker-animate {
            animation: ticker 40s linear infinite;
            animation-play-state: paused;
            backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
            will-change: transform;
          }

          .ticker-animate.is-running {
            animation-play-state: running;
          }

          .exploration-ticker-viewport:hover .ticker-animate.is-running {
            animation-play-state: paused;
          }

          .exploration-card {
            backface-visibility: hidden;
            transform: translate3d(0, 0, 0) scale(1);
            transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
            will-change: transform;
          }

          .exploration-card:hover {
            transform: translate3d(0, 0, 0) scale(1.01);
          }
        `}</style>
      </div>
    </section>
  );
}
