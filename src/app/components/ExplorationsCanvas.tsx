import { useEffect, useState } from "react";
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

const reelImages = [
  { src: img8, alt: "ShopEasy onboarding", ty: 20, rot: 3, w: 160 },
  { src: image11, alt: "E-commerce cart", ty: 102, rot: 2, w: 136 },
  { src: img5, alt: "Fashion app", ty: 44, rot: -3, w: 142 },
  { src: img2, alt: "Letter sharing", ty: 12, rot: -2, w: 186 },
  { src: img6, alt: "Task management", ty: 122, rot: 3, w: 156 },
  { src: slice1, alt: "Shopping cart", ty: 66, rot: 2, w: 146 },
  { src: img4, alt: "Photo gallery", ty: 136, rot: -3, w: 130 },
  { src: img1, alt: "Article reading", ty: 30, rot: -2, w: 162 },
  { src: image10, alt: "Interest selection", ty: 116, rot: -2, w: 138 },
  { src: img12, alt: "Product design", ty: 60, rot: -3, w: 128 },
  { src: img3, alt: "Template selection", ty: 146, rot: 2, w: 124 },
];

const doubled = [...reelImages, ...reelImages];

export function ExplorationsCanvas() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoverPauseEnabled, setHoverPauseEnabled] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="pb-[44px] lg:pb-[56px] animate-fade-in stagger-6">
      <div className="border-t border-[rgba(0,0,0,0.06)] pt-[44px] lg:pt-[56px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] mb-[32px] lg:mb-[40px]">
          <div className="sm:col-span-2">
            <p className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase opacity-40">
              Explorations
            </p>
          </div>
        </div>

        <div
          className="relative -mx-[24px] md:-mx-[32px] lg:mx-[-120px] overflow-hidden"
          style={{ height: "clamp(245px, 29vw, 330px)" }}
          onClick={() => {
            setSelectedIndex(null);
            setHoverPauseEnabled(false);
          }}
          onMouseLeave={() => setHoverPauseEnabled(true)}
        >
          <div
            className="absolute inset-y-0 left-0 w-[44px] sm:w-[72px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fafafa 6%, rgba(250,250,250,0))" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-[44px] sm:w-[72px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #fafafa 6%, rgba(250,250,250,0))" }}
          />

          <div className={`scattered-track flex items-start gap-[62px] pl-[54px] ${hoverPauseEnabled ? "hover-pause-enabled" : ""} ${selectedIndex !== null ? "spotlight-active" : ""}`}>
            {doubled.map((img, index) => {
              const isSelected = selectedIndex === index;
              const isDimmed = selectedIndex !== null && !isSelected;

              return (
                <button
                  key={`${img.alt}-${index}`}
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`Spotlight ${img.alt}`}
                  className={`exploration-item relative flex-shrink-0 appearance-none border-0 bg-transparent p-0 text-left transition-[opacity,transform,filter] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a72b8]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#fafafa] ${
                    isSelected ? "z-20" : "z-0 hover:scale-[1.05]"
                  } ${isDimmed ? "opacity-50" : "opacity-100"}`}
                  style={{
                    width: img.w,
                    transform: `translateY(${img.ty}px) rotate(${isSelected ? 0 : img.rot}deg) scale(${isSelected ? 1.16 : 1})`,
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    setHoverPauseEnabled(true);
                    setSelectedIndex(isSelected ? null : index);
                  }}
                >
                  <span className="block rounded-[10px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.13)] ring-1 ring-black/[0.025]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto block"
                      draggable={false}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes scattered-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .scattered-track {
            width: max-content;
            animation: scattered-scroll 60s linear infinite;
          }

          .scattered-track.hover-pause-enabled:hover {
            animation-play-state: paused;
          }

          .scattered-track.spotlight-active {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .scattered-track {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
