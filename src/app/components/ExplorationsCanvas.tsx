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
  { src: img8, alt: "ShopEasy onboarding", ty: 20, rot: 3, w: 146 },
  { src: image11, alt: "E-commerce cart", ty: 98, rot: 2, w: 124 },
  { src: img5, alt: "Fashion app", ty: 42, rot: -3, w: 128 },
  { src: img2, alt: "Letter sharing", ty: 12, rot: -2, w: 168 },
  { src: img6, alt: "Task management", ty: 118, rot: 3, w: 142 },
  { src: slice1, alt: "Shopping cart", ty: 62, rot: 2, w: 132 },
  { src: img4, alt: "Photo gallery", ty: 132, rot: -3, w: 118 },
  { src: img1, alt: "Article reading", ty: 28, rot: -2, w: 148 },
  { src: image10, alt: "Interest selection", ty: 112, rot: -2, w: 126 },
  { src: img12, alt: "Product design", ty: 58, rot: -3, w: 116 },
  { src: img3, alt: "Template selection", ty: 142, rot: 2, w: 112 },
];

const doubled = [...reelImages, ...reelImages];

export function ExplorationsCanvas() {
  return (
    <section className="pb-[56px] lg:pb-[72px] animate-fade-in stagger-6">
      <div className="border-t border-[rgba(0,0,0,0.06)] pt-[56px] lg:pt-[72px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] mb-[44px] lg:mb-[56px]">
          <div className="sm:col-span-2">
            <p className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase opacity-40">
              Explorations
            </p>
          </div>
        </div>

        <div
          className="relative -mx-[24px] md:-mx-[32px] lg:mx-[-120px] overflow-hidden"
          style={{ height: "clamp(250px, 30vw, 340px)" }}
        >
          <div
            className="absolute inset-y-0 left-0 w-[44px] sm:w-[72px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fafafa 6%, rgba(250,250,250,0))" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-[44px] sm:w-[72px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #fafafa 6%, rgba(250,250,250,0))" }}
          />

          <div className="scattered-track flex items-start gap-[58px] pl-[54px]">
            {doubled.map((img, index) => (
              <div
                key={`${img.alt}-${index}`}
                className="flex-shrink-0 transition-transform duration-500 ease-out hover:scale-[1.05]"
                style={{
                  width: img.w,
                  transform: `translateY(${img.ty}px) rotate(${img.rot}deg)`,
                }}
              >
                <div className="rounded-[10px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.13)] ring-1 ring-black/[0.025]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto block"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
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

          .scattered-track:hover {
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
