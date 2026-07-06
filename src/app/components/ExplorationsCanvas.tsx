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

let explorationAudioContext: AudioContext | null = null;

function playExplorationFocusSound() {
  if (typeof window === "undefined") return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  explorationAudioContext ??= new AudioContextClass();
  const context = explorationAudioContext;
  const now = context.currentTime;

  if (context.state === "suspended") {
    void context.resume();
  }

  const output = context.createGain();
  const filter = context.createBiquadFilter();
  const body = context.createOscillator();
  const tap = context.createOscillator();
  const air = context.createOscillator();
  const bodyGain = context.createGain();
  const tapGain = context.createGain();
  const airGain = context.createGain();

  filter.type = "highpass";
  filter.frequency.setValueAtTime(160, now);

  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.2, now + 0.014);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

  body.type = "sine";
  body.frequency.setValueAtTime(315, now);
  body.frequency.exponentialRampToValueAtTime(230, now + 0.11);
  bodyGain.gain.setValueAtTime(0.18, now);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

  tap.type = "sine";
  tap.frequency.setValueAtTime(1040, now + 0.008);
  tap.frequency.exponentialRampToValueAtTime(710, now + 0.09);
  tapGain.gain.setValueAtTime(0.26, now + 0.008);
  tapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

  air.type = "triangle";
  air.frequency.setValueAtTime(1880, now + 0.018);
  air.frequency.exponentialRampToValueAtTime(1320, now + 0.15);
  airGain.gain.setValueAtTime(0.08, now + 0.018);
  airGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

  body.connect(bodyGain);
  tap.connect(tapGain);
  air.connect(airGain);
  bodyGain.connect(filter);
  tapGain.connect(filter);
  airGain.connect(filter);
  filter.connect(output);
  output.connect(context.destination);

  body.start(now);
  tap.start(now + 0.008);
  air.start(now + 0.018);
  body.stop(now + 0.18);
  tap.stop(now + 0.12);
  air.stop(now + 0.2);
}

export function ExplorationsCanvas() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(0);
  const targetSpeedRef = useRef(0);
  const baseSpeedRef = useRef(0);
  const hoverPausedRef = useRef(false);
  const spotlightPausedRef = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    spotlightPausedRef.current = selectedIndex !== null;
    targetSpeedRef.current = hoverPausedRef.current || spotlightPausedRef.current ? 0 : baseSpeedRef.current;
  }, [selectedIndex]);

  useEffect(() => {
    let animationFrame = 0;
    let lastTime = performance.now();

    const updateMetrics = () => {
      const track = trackRef.current;
      if (!track) return;

      const halfTrackWidth = track.scrollWidth / 2;
      baseSpeedRef.current = halfTrackWidth / 60;
      if (!hoverPausedRef.current && !spotlightPausedRef.current) {
        targetSpeedRef.current = baseSpeedRef.current;
      }
    };

    const tick = (time: number) => {
      const track = trackRef.current;
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (track) {
        const halfTrackWidth = track.scrollWidth / 2;
        if (halfTrackWidth > 0) {
          const ease = targetSpeedRef.current === 0 ? 0.12 : 0.08;
          speedRef.current += (targetSpeedRef.current - speedRef.current) * ease;
          offsetRef.current = (offsetRef.current + speedRef.current * delta) % halfTrackWidth;
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      animationFrame = requestAnimationFrame(tick);
    };

    updateMetrics();
    speedRef.current = baseSpeedRef.current;
    targetSpeedRef.current = baseSpeedRef.current;
    animationFrame = requestAnimationFrame(tick);
    window.addEventListener("resize", updateMetrics);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  const resumeReel = () => {
    hoverPausedRef.current = false;
    spotlightPausedRef.current = false;
    targetSpeedRef.current = baseSpeedRef.current;
  };

  const pauseReel = () => {
    hoverPausedRef.current = true;
    targetSpeedRef.current = 0;
  };

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
          onMouseEnter={pauseReel}
          onClick={() => {
            setSelectedIndex(null);
            resumeReel();
          }}
          onMouseLeave={() => {
            setSelectedIndex(null);
            resumeReel();
          }}
        >
          <div
            className="absolute inset-y-0 left-0 w-[44px] sm:w-[72px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #fafafa 6%, rgba(250,250,250,0))" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-[44px] sm:w-[72px] z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #fafafa 6%, rgba(250,250,250,0))" }}
          />

          <div ref={trackRef} className="scattered-track flex items-start gap-[62px] pl-[54px]">
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
                    isSelected ? "z-20" : "z-0"
                  } ${isDimmed ? "opacity-50" : "opacity-100"}`}
                  style={{
                    width: img.w,
                    transform: `translateY(${img.ty}px) rotate(${isSelected ? 0 : img.rot}deg) scale(${isSelected ? 1.34 : 1})`,
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    playExplorationFocusSound();
                    hoverPausedRef.current = false;
                    spotlightPausedRef.current = !isSelected;
                    targetSpeedRef.current = isSelected ? baseSpeedRef.current : 0;
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
          .scattered-track {
            width: max-content;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .scattered-track {
              transform: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
