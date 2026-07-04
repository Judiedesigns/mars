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
  { id: 1,  src: img1,    alt: "Article reading interface" },
  { id: 2,  src: img2,    alt: "Letter sharing app" },
  { id: 3,  src: img3,    alt: "Template selection" },
  { id: 4,  src: img4,    alt: "Photo gallery upload" },
  { id: 5,  src: img5,    alt: "E-commerce fashion app" },
  { id: 6,  src: img6,    alt: "Task management app" },
  { id: 7,  src: slice1,  alt: "Shopping cart experience" },
  { id: 8,  src: img8,    alt: "ShopEasy onboarding" },
  { id: 9,  src: image10, alt: "Interest selection screens" },
  { id: 10, src: image11, alt: "E-commerce cart page" },
  { id: 11, src: img12,   alt: "Product design interface" },
];

const doubled = [...reelImages, ...reelImages];

export function ScatteredReel() {
  return (
    <section className="pb-[72px] lg:pb-[96px] overflow-hidden">
      <div className="relative -mx-[24px] md:-mx-[32px] lg:mx-0 overflow-hidden">
        <div
          className="flex gap-[16px] pl-[24px] md:pl-[32px] lg:pl-0 ticker-animate"
          style={{ width: "fit-content" }}
        >
          {doubled.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: "70vw", maxWidth: "500px" }}
            >
              <div className="bg-[#F2F2F2] w-full p-[12px] rounded-[12px] h-[280px] sm:h-[320px] lg:h-[360px] transition-transform duration-500 ease-out hover:scale-[1.03]">
                <div className="bg-[#efefef] w-full h-full overflow-hidden rounded-[8px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
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
          animation: ticker 60s linear infinite;
        }
        .ticker-animate:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
