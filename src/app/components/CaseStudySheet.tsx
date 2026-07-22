import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type CaseStudyVisual = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  fit?: "contain" | "cover";
};

export type CaseStudyDetail = {
  label: string;
  value: string;
  href?: string;
};

type CaseStudySheetProps = {
  title: string;
  role: string;
  year: string;
  intro: string;
  paragraphs: string[];
  details: CaseStudyDetail[];
  visuals: CaseStudyVisual[];
  nextProject?: {
    label: string;
    onClick?: () => void;
  };
  onBack: () => void;
  hasWorkBackdrop?: boolean;
  onDragProgressChange?: (progress: number) => void;
};

const closeDragDistance = 420;
const closeThreshold = 96;
const initialSheetEnterOffset = 92;
const maxReadableLiveLinkLength = 28;

function getDetailDisplayValue(detail: CaseStudyDetail) {
  if (detail.href && detail.label.toLowerCase() === "live link" && detail.value.length > maxReadableLiveLinkLength) {
    return "Open link";
  }

  return detail.value;
}

function ShowcaseMedia({ visual, priority = false }: { visual: CaseStudyVisual; priority?: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(priority || visual.type !== "video");
  const [isLoaded, setIsLoaded] = useState(false);
  const isCover = visual.fit === "cover";
  const mediaClassName = `block size-full ${
    isCover ? "rounded-[11px] object-cover" : "rounded-[10px] object-contain"
  } transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.025] ${isLoaded ? "opacity-100" : "opacity-0"}`;

  useEffect(() => {
    setIsLoaded(false);
    setShouldLoadVideo(priority || visual.type !== "video");
  }, [priority, visual.src, visual.type]);

  useEffect(() => {
    if (visual.type !== "video" || shouldLoadVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoadVideo, visual.type]);

  return (
    <figure className={`group relative h-[calc((100vw-40px)*0.68)] max-h-[340px] min-h-[232px] w-[calc(100vw-40px)] max-w-[488px] shrink-0 overflow-hidden rounded-[11px] border border-[rgba(154,164,165,0.07)] bg-[#eef1f1] sm:h-[340px] sm:w-[488px] ${isCover ? "" : "p-[1px]"}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[linear-gradient(110deg,#ecefef_8%,#f8f9f9_18%,#ecefef_33%)] bg-[length:200%_100%] transition-opacity duration-300 ${isLoaded ? "opacity-0" : "opacity-100 animate-[shimmer_1.35s_linear_infinite]"}`}
      />
      {visual.type === "video" ? (
        <video
          ref={videoRef}
          aria-label={visual.alt}
          className={`${mediaClassName} relative`}
          src={shouldLoadVideo ? visual.src : undefined}
          poster={visual.poster}
          autoPlay={shouldLoadVideo}
          muted
          loop
          playsInline
          preload={priority ? "metadata" : "none"}
          onLoadedData={() => setIsLoaded(true)}
        />
      ) : (
        <img
          src={visual.src}
          alt={visual.alt}
          className={`${mediaClassName} relative`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      )}
    </figure>
  );
}

export function CaseStudySheet({
  title,
  role,
  year,
  intro,
  paragraphs,
  details,
  visuals,
  nextProject,
  onBack,
  hasWorkBackdrop = false,
  onDragProgressChange,
}: CaseStudySheetProps) {
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const dragStartYRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const draggedRef = useRef(false);
  const activePointerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [enterOffset, setEnterOffset] = useState(hasWorkBackdrop ? initialSheetEnterOffset : 0);
  const [isEntering, setIsEntering] = useState(hasWorkBackdrop);
  const [isContentSettled, setIsContentSettled] = useState(!hasWorkBackdrop);
  const [isBackLinkMuted, setIsBackLinkMuted] = useState(false);
  const [showcaseScrollState, setShowcaseScrollState] = useState({
    canScrollPrevious: false,
    canScrollNext: visuals.length > 1,
  });

  useLayoutEffect(() => {
    let enterFrame: number | null = null;
    let enterTimer: number | null = null;
    let contentTimer: number | null = null;

    if (hasWorkBackdrop) {
      enterFrame = window.requestAnimationFrame(() => {
        setEnterOffset(0);
        enterTimer = window.setTimeout(() => setIsEntering(false), 460);
        contentTimer = window.setTimeout(() => setIsContentSettled(true), 120);
      });
    }

    return () => {
      if (enterFrame !== null) window.cancelAnimationFrame(enterFrame);
      if (enterTimer !== null) window.clearTimeout(enterTimer);
      if (contentTimer !== null) window.clearTimeout(contentTimer);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      onDragProgressChange?.(0);
    };
  }, [hasWorkBackdrop, onDragProgressChange]);

  useEffect(() => {
    if (!isDragging) return;

    const handleWindowPointerMove = (event: PointerEvent) => {
      if (activePointerRef.current !== event.pointerId) return;
      updateDragOffset(event.clientY);
    };

    const handleWindowPointerUp = (event: PointerEvent) => {
      finishDrag(activePointerRef.current ?? event.pointerId);
    };

    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("pointerup", handleWindowPointerUp);
    window.addEventListener("pointercancel", handleWindowPointerUp);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerUp);
      window.removeEventListener("pointercancel", handleWindowPointerUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const container = showcaseRef.current;
    if (!container) return;

    const updateScrollState = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setShowcaseScrollState({
        canScrollPrevious: container.scrollLeft > 2,
        canScrollNext: container.scrollLeft < maxScrollLeft - 2,
      });
    };

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [visuals.length]);

  const handleContentScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setIsBackLinkMuted(event.currentTarget.scrollTop > 48);
  };

  const scrollShowcase = (direction: "previous" | "next") => {
    const container = showcaseRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    const firstItem = items[0]?.querySelector("figure");
    const itemWidth = firstItem?.getBoundingClientRect().width ?? container.clientWidth * 0.8;
    const gap = Number.parseFloat(window.getComputedStyle(container).columnGap || "16") || 16;
    const currentIndex = Math.round(container.scrollLeft / (itemWidth + gap));
    const targetIndex = Math.max(
      0,
      Math.min(items.length - 1, currentIndex + (direction === "next" ? 1 : -1))
    );
    const target = items[targetIndex];
    const centeredOffset = Math.max((container.clientWidth - itemWidth) / 2, 0);

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft - centeredOffset,
      behavior: "smooth",
    });
  };

  const handleDragStart = (event: React.PointerEvent<HTMLButtonElement>) => {
    activePointerRef.current = event.pointerId;
    dragStartYRef.current = event.clientY;
    dragOffsetRef.current = 0;
    draggedRef.current = false;
    setIsDragging(true);
    onDragProgressChange?.(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const updateDragOffset = (clientY: number) => {
    const nextOffset = Math.max(0, clientY - dragStartYRef.current);
    dragOffsetRef.current = Math.min(nextOffset, closeDragDistance);
    if (nextOffset > 4) draggedRef.current = true;

    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      const offset = dragOffsetRef.current;
      setDragOffset(offset);
      onDragProgressChange?.(Math.min(offset / closeDragDistance, 1));
    });
  };

  const closeSheet = () => {
    setIsContentSettled(false);
    onDragProgressChange?.(1);
    setDragOffset(window.innerHeight);
    window.setTimeout(onBack, 300);
  };

  const finishDrag = (pointerId: number, releaseTarget?: HTMLButtonElement) => {
    if (activePointerRef.current !== pointerId) return;
    activePointerRef.current = null;
    setIsDragging(false);
    if (releaseTarget?.hasPointerCapture(pointerId)) {
      releaseTarget.releasePointerCapture(pointerId);
    }

    if (dragOffsetRef.current > closeThreshold) {
      closeSheet();
      return;
    }

    dragOffsetRef.current = 0;
    setDragOffset(0);
    onDragProgressChange?.(0);
  };

  const handleHandleClick = () => {
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }

    onBack();
  };

  return (
    <main className={`min-h-screen overflow-hidden text-[#2e2e2e] ${hasWorkBackdrop ? "bg-transparent" : "bg-[#1b1b1b]"}`}>
      {!hasWorkBackdrop && (
        <div aria-hidden="true" className="fixed inset-x-0 top-0 h-[118px] overflow-hidden bg-[#1b1b1b]">
          <div className="mx-auto mt-[10px] h-[94px] w-[92vw] max-w-[1354px] rounded-t-[18px] bg-[#8f8f8f] opacity-80 blur-[0.2px]" />
        </div>
      )}

      <section
        data-case-study-sheet={title.toLowerCase().replace(/\s+/g, "-")}
        className="fixed inset-x-0 bottom-0 top-[36px] z-10 flex flex-col overflow-hidden rounded-t-[22px] bg-white px-[20px] shadow-[0_-8px_34px_rgba(0,0,0,0.08)] will-change-transform sm:rounded-t-[28px] sm:px-[24px]"
        style={{
          transform: `translateY(${dragOffset + enterOffset}px)`,
          transition: isDragging ? "none" : `transform ${isEntering ? 460 : 360}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[112px] bg-white sm:hidden"
        />

        <button
          type="button"
          data-native-cursor="drag"
          onClick={handleHandleClick}
          onPointerDown={handleDragStart}
          onPointerMove={(event) => {
            if (activePointerRef.current !== event.pointerId) return;
            updateDragOffset(event.clientY);
          }}
          onPointerUp={(event) => finishDrag(event.pointerId, event.currentTarget)}
          onPointerCancel={(event) => finishDrag(event.pointerId, event.currentTarget)}
          className="group relative z-20 mx-auto flex w-full touch-none cursor-grab items-start justify-center pb-[8px] pt-[11px] active:cursor-grabbing"
          aria-label="Back to work"
        >
          <span className="h-[4px] w-[38px] rounded-full bg-[#d0d7d7] transition-[width,background-color,transform] duration-200 ease-out group-hover:w-[42px] group-hover:bg-[#aeb7b7] group-active:w-[42px] group-active:scale-x-[0.92] group-active:bg-[#8f9a9a]" />
        </button>

        <header
          className={`absolute left-[20px] top-[56px] z-20 flex items-start justify-between transition-opacity duration-200 ease-out sm:left-[42px] sm:top-[82px] lg:left-[54px] ${
            isBackLinkMuted ? "opacity-100 sm:opacity-20" : "opacity-100"
          }`}
        >
          <button
            type="button"
            data-native-cursor="pointer"
            onClick={onBack}
            className="group flex items-center gap-[9px] text-left transition-transform duration-150 ease-out active:scale-[0.97]"
            aria-label="Back to work"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-[16px] stroke-[1.8] text-[#5d5d5d] transition-colors duration-200 group-hover:text-[#1a1a1a]"
            />
            <span className="rainbow-hover font-['Inter',sans-serif] text-[13px] font-normal lowercase tracking-[0.026em] text-[#5d5d5d] transition-colors duration-200 group-hover:text-[#1a1a1a] sm:text-[14px]">
              work
            </span>
          </button>
        </header>

        <div
          className="work-filter-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain pt-[88px]"
          onScroll={handleContentScroll}
        >
          <div
            className="mx-auto flex w-full max-w-[548px] flex-col px-0 pb-[112px] transition-opacity duration-300 ease-out sm:px-[30px]"
            style={{ opacity: isContentSettled ? 1 : 0.42 }}
          >
            <section className="flex flex-col" aria-label={`${title} project showcase`}>
              <div
                ref={showcaseRef}
                className="work-filter-scroll flex w-[calc(100vw-40px)] gap-[15px] overflow-x-auto pb-0 sm:w-[calc(50vw+224px)]"
              >
                {visuals.map((visual, index) => (
                  <div key={`${visual.src}-${index}`}>
                    <ShowcaseMedia visual={visual} priority={index === 0} />
                  </div>
                ))}
              </div>

              {visuals.length > 1 && (
                <div className="flex items-start gap-[4px] pt-[14px]">
                  <button
                    type="button"
                    data-native-cursor="pointer"
                    onClick={() => scrollShowcase("previous")}
                    disabled={!showcaseScrollState.canScrollPrevious}
                    className="grid h-[21px] w-[25px] place-items-center rounded-[6px] border border-[rgba(130,139,140,0.1)] bg-white/70 text-[rgba(0,0,0,0.42)] transition-[border-color,color,opacity,transform] duration-150 ease-out hover:border-[rgba(0,0,0,0.16)] hover:text-[#1a1a1a] active:scale-[0.96] disabled:cursor-default disabled:opacity-35 disabled:hover:border-[rgba(130,139,140,0.1)] disabled:hover:text-[rgba(0,0,0,0.42)] disabled:active:scale-100"
                    aria-label={`Previous ${title} visual`}
                  >
                    <ChevronLeft aria-hidden="true" className="size-[16px] stroke-[2]" />
                  </button>
                  <button
                    type="button"
                    data-native-cursor="pointer"
                    onClick={() => scrollShowcase("next")}
                    disabled={!showcaseScrollState.canScrollNext}
                    className="grid h-[21px] w-[25px] place-items-center rounded-[6px] border border-[rgba(130,139,140,0.1)] bg-white/70 text-[rgba(0,0,0,0.56)] transition-[border-color,color,opacity,transform] duration-150 ease-out hover:border-[rgba(0,0,0,0.16)] hover:text-[#1a1a1a] active:scale-[0.96] disabled:cursor-default disabled:opacity-35 disabled:hover:border-[rgba(130,139,140,0.1)] disabled:hover:text-[rgba(0,0,0,0.56)] disabled:active:scale-100"
                    aria-label={`Next ${title} visual`}
                  >
                    <ChevronRight aria-hidden="true" className="size-[16px] stroke-[2]" />
                  </button>
                </div>
              )}
            </section>

            <div className="flex w-full flex-col gap-[28px]">
              <section className="flex flex-col pt-[34px]" aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}>
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="flex min-w-0 items-center gap-[4px]">
                    <h1
                      id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
                      className="font-['Aspekta','Inter',sans-serif] text-[15px] font-medium leading-[22px] text-[#3c4142]"
                    >
                      {title}
                    </h1>
                    <p className="truncate font-['Aspekta','Inter',sans-serif] text-[13.333px] font-normal leading-[20px] text-[#7a8485]">
                      — {role}
                    </p>
                  </div>
                  <p className="font-['Aspekta','Inter',sans-serif] text-[11.5px] font-normal leading-[16px] text-[#7a8485]">
                    {year}
                  </p>
                </div>

                <p className="pt-[27px] font-['Aspekta','Inter',sans-serif] text-[13.333px] font-normal leading-[23.333px] text-[#828B8C]">
                  {intro}
                </p>

                <div className="flex flex-col gap-[28px] pt-[16px]">
                  <div className="space-y-[18px] font-['Aspekta','Inter',sans-serif] text-[13.333px] font-normal leading-[23.333px] text-[#828B8C]">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <dl className="flex flex-col gap-[22px]">
                    {details.map((detail) => (
                      <div key={detail.label}>
                        <dt className="font-['Aspekta','Inter',sans-serif] text-[13.333px] font-medium leading-[23.333px] text-[#3c4142]">
                          {detail.label}
                        </dt>
                        <dd className="font-['Aspekta','Inter',sans-serif] text-[13.333px] font-normal leading-[23.333px] text-[#828B8C]">
                          {detail.href ? (
                            <a
                              href={detail.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-native-cursor="pointer"
                              className="rainbow-hover cursor-pointer underline decoration-[rgba(130,139,140,0.45)] decoration-[1px] underline-offset-[3px] transition-colors duration-200 hover:decoration-[#3c4142]"
                            >
                              {getDetailDisplayValue(detail)}
                            </a>
                          ) : (
                            detail.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>

              {nextProject && (
                <section className="pt-0" aria-labelledby="next-project">
                  <button
                    type="button"
                    data-native-cursor="pointer"
                    onClick={nextProject.onClick}
                    className="group flex w-full items-center justify-between border-t border-[rgba(34,34,34,0.14)] pt-[14px] text-left transition-[border-color,transform] duration-200 ease-out hover:border-[rgba(34,34,34,0.24)] active:scale-[0.985]"
                  >
                    <span
                      id="next-project"
                      className="font-['Aspekta','Inter',sans-serif] text-[13.333px] font-medium leading-[23.333px] text-[#5f6667] transition-colors duration-200 group-hover:text-[#3c4142]"
                    >
                      Next project
                    </span>
                    <span className="flex items-center gap-[5px] font-['Aspekta','Inter',sans-serif] text-[13.333px] font-normal leading-[23.333px] text-[#828B8C] transition-colors duration-200 group-hover:text-[#3c4142]">
                      {nextProject.label}
                      <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
                        →
                      </span>
                    </span>
                  </button>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
