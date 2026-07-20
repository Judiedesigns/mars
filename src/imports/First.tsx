import imgAiDesignCover from "../../assets/optimized/ai-design-cover.jpg";
import imgVisualHierarchyCover from "../../assets/optimized/visual-hierarchy-cover.jpg";
import imgColorVariablesCover from "../../assets/optimized/color-variables-cover.jpg";
import ArrowUpRight from "./ArrowUpRight-28-2166";
import ArrowRight from "./ArrowRight";
import ProfilePictureShader from "../app/components/ProfilePictureShader";
import { ExplorationsCanvas } from "../app/components/ExplorationsCanvas";
import { projects, workFilters, type ProjectMedia } from "../app/data/projects";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import flowerMark from "../../assets/image-121.png";
import { ArrowUpRight as ArrowUpRightIcon } from "lucide-react";

type FirstProps = {
  onProjectClick?: (projectId: number) => void;
};

const initialProjectCount = 6;
const projectRevealStep = 2;

function ProjectPreviewMedia({
  media,
  title,
  loading = "lazy",
}: {
  media: ProjectMedia;
  title: string;
  loading?: "eager" | "lazy";
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const objectFitClass = media.fit === "contain" ? "object-contain" : "object-cover";

  useEffect(() => {
    if (media.type !== "video" || shouldLoadVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [media.type, shouldLoadVideo]);

  if (media.type === "video") {
    return (
      <video
        ref={videoRef}
        aria-label={media.alt ?? `${title} preview`}
        className={`${objectFitClass} pointer-events-none size-full transition-transform duration-[650ms] ease-out group-hover:scale-[1.035]`}
        src={shouldLoadVideo ? media.src : undefined}
        autoPlay={shouldLoadVideo}
        muted
        loop
        playsInline
        preload="none"
      />
    );
  }

  return (
    <img
      alt={media.alt ?? title}
      className={`${objectFitClass} pointer-events-none size-full transition-transform duration-[650ms] ease-out group-hover:scale-[1.035]`}
      src={media.src}
      onError={(event) => {
        if (!media.fallbackSrc || event.currentTarget.src === media.fallbackSrc) return;
        event.currentTarget.src = media.fallbackSrc;
      }}
      loading={loading}
      decoding="async"
    />
  );
}

export default function First({ onProjectClick }: FirstProps) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState<(typeof workFilters)[number]>("Selected Work");
  const [visibleProjectCount, setVisibleProjectCount] = useState(initialProjectCount);
  const [siteNoteOpen, setSiteNoteOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const filteredProjects = activeFilter === "Play"
    ? projects.filter((project) => project.category === "AI Prototypes")
    : projects.filter((project) => project.category !== "AI Prototypes");
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);
  const remainingProjectCount = Math.max(filteredProjects.length - visibleProjectCount, 0);
  const canToggleProjectCount = filteredProjects.length > initialProjectCount;
  const allProjectsVisible = canToggleProjectCount && remainingProjectCount === 0;

  useEffect(() => {
    setVisibleProjectCount(initialProjectCount);
  }, [activeFilter]);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = async () => {
    const email = 'florencekey22@gmail.com';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        copyEmailFallback(email);
      }
    } catch {
      copyEmailFallback(email);
    }
  };

  const copyEmailFallback = (email: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen overflow-x-hidden" data-name="first">
      <div className="max-w-[660px] w-full min-w-0 mx-auto px-[20px] sm:px-[24px] md:px-[32px] lg:px-[0]">

        {/* ─── Navigation ─── */}
        <nav className="flex items-center justify-between py-[24px] lg:py-[32px] animate-fade-in-down">

          <p className="flex items-center gap-[4px] font-['DM_Mono',sans-serif] text-[15px] lg:text-[16px] text-[#1a1a1a] tracking-[-0.02em]">
            <span>Florence</span>
            <img
              src={flowerMark}
              alt=""
              aria-hidden="true"
              className="h-[25px] w-[25px] translate-y-[1px] object-contain lg:h-[27px] lg:w-[27px]"
              decoding="async"
            />
          </p>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="font-['DM_Mono',sans-serif] text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.72)] tracking-[-0.01em] rainbow-hover cursor-pointer p-[4px] hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* ─── Hero ─── */}
        <section className="pt-[48px] lg:pt-[72px] pb-[72px] lg:pb-[96px]">
          {/* Avatar */}
          <div className="mb-[32px] lg:mb-[40px] animate-scale-in stagger-1">
            <div className="pointer-events-none">
              <ProfilePictureShader />
            </div>
          </div>

          {/* Identity — quiet, clear, and direct */}
          <div className="mb-[48px] lg:mb-[56px] animate-fade-in stagger-2">
            <h1 className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[24px] lg:text-[28px] leading-[1.2] tracking-[-0.03em] mb-[8px]">
              Florence Eze
            </h1>
            <p className="font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.46)] leading-[1.5]">
              Product & Visual Designer · Web Builder
            </p>
          </div>

          {/* About — supporting, not competing */}
          <div className="animate-fade-in stagger-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
              <div className="sm:col-span-2">
                <h2 className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase mb-[16px] opacity-40">
                  About
                </h2>
                <p className="max-w-full font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.55)] leading-[1.7] break-words [overflow-wrap:anywhere]">
                  {`I'm a product designer focused on UX, research, and interface design. I've worked across agency and product environments, shipping product-ready work alongside developers and cross-functional teams. I'm drawn to complex problems, simplifying systems, and interfaces that feel effortless to use.`}
                </p>
                <p className="mt-[18px] font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.62)] leading-[1.7]">
                  Currently open to full-time roles and collaborations,{" "}
                  <a
                    href="mailto:florencekey22@gmail.com"
                    className="relative inline-flex cursor-pointer border-0 bg-transparent p-0 [font:inherit] text-[inherit] underline decoration-[rgba(0,0,0,0.2)] underline-offset-[4px] transition-colors duration-200 hover:text-[#1a1a1a] hover:decoration-[rgba(0,0,0,0.48)]"
                  >
                    message me.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section id="projects" className="pb-[72px] lg:pb-[96px] scroll-mt-[80px] animate-fade-in stagger-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
            <h2 className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase mb-[18px] opacity-40 sm:col-span-2">
              Work
            </h2>
          </div>

          <div className="relative mb-[32px] lg:mb-[40px]">
            <div
              className="flex max-w-full gap-[6px] overflow-x-auto pb-[6px] pr-[28px] touch-pan-x snap-x work-filter-scroll"
              role="tablist"
              aria-label="Work filters"
            >
              {workFilters.map((filter) => {
                const isActive = filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter)}
                    className={`relative shrink-0 snap-start font-['Inter',sans-serif] text-[13px] lg:text-[14px] tracking-[-0.01em] px-[11px] lg:px-[13px] py-[6px] rounded-full transition-colors duration-200 whitespace-nowrap ${
                      isActive
                        ? "text-[#1a1a1a]"
                        : "text-[rgba(0,0,0,0.42)] bg-transparent hover:text-[#1a1a1a] hover:bg-[rgba(0,0,0,0.035)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-work-filter"
                        className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.055)]"
                        transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.7 }}
                      />
                    )}
                    <span className="relative z-10">{filter}</span>
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[34px] bg-gradient-to-l from-[#fafafa] to-transparent" />
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[40px] sm:gap-y-[48px]"
            transition={{ layout: { duration: prefersReducedMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] } }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProjects.map((proj, index) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.985 }}
                  transition={{
                    opacity: { duration: prefersReducedMotion ? 0.12 : 0.22, ease: "easeOut" },
                    scale: { duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: prefersReducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] },
                    layout: { duration: prefersReducedMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] },
                  }}
                  onClick={() => onProjectClick?.(proj.id)}
                  className="flex flex-col items-start project-card cursor-pointer group"
                >
                  {/* Thumbnail with background fill and padding */}
                  <div
                    className="bg-[#F2F2F2] w-full px-[12px] py-[8px] rounded-[8px] mb-[16px] sm:mb-[18px] transition-[background-color,box-shadow,transform] duration-[450ms] ease-out group-hover:bg-[#eeeeee] group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.055)]"
                  >
                    <div className="bg-[#efefef] w-full h-[221px] overflow-hidden rounded-[6px] sm:h-auto sm:aspect-[3/2]">
                      <ProjectPreviewMedia
                        media={proj.cover}
                        title={proj.title}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                  {/* Project info — title leads, meta supports */}
                  <p className="font-['Inter',sans-serif] font-medium text-[15px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.3] mb-[4px] transition-colors duration-300 group-hover:text-[#000]">
                    {proj.title}
                  </p>
                  <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.35)] tracking-[-0.01em] leading-[1.4] transition-colors duration-300 group-hover:text-[rgba(0,0,0,0.48)]">
                    {proj.role} · {proj.year}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {canToggleProjectCount && (
            <motion.div layout className="flex justify-center mt-[48px] lg:mt-[56px]">
              <button
                type="button"
                aria-expanded={allProjectsVisible}
                onClick={() => {
                  setVisibleProjectCount((count) => (
                    allProjectsVisible
                      ? initialProjectCount
                      : remainingProjectCount <= 3
                        ? filteredProjects.length
                        : Math.min(count + projectRevealStep, filteredProjects.length)
                  ));
                }}
                className="group rounded-full border border-[rgba(0,0,0,0.18)] px-[30px] sm:px-[38px] py-[15px] sm:py-[17px] font-['Inter',sans-serif] text-[15px] sm:text-[17px] font-medium tracking-[-0.03em] text-[#1a1a1a] transition-[background-color,border-color,color,box-shadow,transform] duration-300 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#fafafa] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] active:scale-[0.98]"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-1px]">
                  {allProjectsVisible ? "See Less" : `See More Projects (${remainingProjectCount})`}
                </span>
              </button>
            </motion.div>
          )}
        </section>

        {/* ─── Writings ─── */}
        <section className="pb-[72px] lg:pb-[96px] animate-fade-in stagger-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
            <h2 className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase mb-[24px] lg:mb-[32px] opacity-40 sm:col-span-2">
              Writing
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
            <div className="flex flex-col gap-[2px] sm:col-span-2">
            {/* Article 1 */}
            <a
              href="https://medium.com/@juddblck2/how-i-design-with-ai-as-a-designer-06a783cb885a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[14px] sm:gap-[16px] py-[14px] sm:py-[16px] rounded-[8px] px-[4px] -mx-[4px] hover:bg-[rgba(0,0,0,0.03)] transition-[background-color,transform] duration-[250ms] group"
            >
              <div className="h-[48px] sm:h-[52px] w-[68px] sm:w-[76px] shrink-0 rounded-[4px] overflow-hidden">
                <img alt="How I Design With AI as a Designer article cover" className="object-cover size-full" src={imgAiDesignCover} loading="lazy" decoding="async" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[15px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.3] mb-[3px] truncate transition-transform duration-300 group-hover:translate-x-[2px]">
                  How I Design With AI as a Designer
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.35)] tracking-[-0.01em] leading-[1.4] truncate">
                  How AI fits into my design process
                </p>
              </div>
              <div className="size-[20px] shrink-0 relative opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity">
                  <ArrowUpRight />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight />
                </div>
              </div>
            </a>

            {/* Subtle separator */}
            <div className="h-px bg-[rgba(0,0,0,0.05)] mx-[4px]" />

            {/* Article 2 */}
            <a
              href="https://medium.com/@juddblck2/visual-design-principles-for-web-design-b43c3fe23268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[14px] sm:gap-[16px] py-[14px] sm:py-[16px] rounded-[8px] px-[4px] -mx-[4px] hover:bg-[rgba(0,0,0,0.03)] transition-[background-color,transform] duration-[250ms] group"
            >
              <div className="h-[48px] sm:h-[52px] w-[68px] sm:w-[76px] shrink-0 rounded-[4px] overflow-hidden">
                <img alt="Visual Hierarchy article cover" className="object-cover size-full" src={imgVisualHierarchyCover} loading="lazy" decoding="async" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[15px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.3] mb-[3px] truncate transition-transform duration-300 group-hover:translate-x-[2px]">
                  Visual Hierarchy
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.35)] tracking-[-0.01em] leading-[1.4] truncate">
                  What makes it important and why we should do it
                </p>
              </div>
              <div className="size-[20px] shrink-0 relative opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity">
                  <ArrowUpRight />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight />
                </div>
              </div>
            </a>

            {/* Subtle separator */}
            <div className="h-px bg-[rgba(0,0,0,0.05)] mx-[4px]" />

            {/* Article 3 */}
            <a
              href="https://medium.com/@juddblck2/what-are-variables-ab89fb4f43ba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[14px] sm:gap-[16px] py-[14px] sm:py-[16px] rounded-[8px] px-[4px] -mx-[4px] hover:bg-[rgba(0,0,0,0.03)] transition-[background-color,transform] duration-[250ms] group"
            >
              <div className="h-[48px] sm:h-[52px] w-[68px] sm:w-[76px] shrink-0 rounded-[4px] overflow-hidden">
                <img alt="Color Variables in Figma article cover" className="object-cover size-full" src={imgColorVariablesCover} loading="lazy" decoding="async" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[15px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.3] mb-[3px] truncate transition-transform duration-300 group-hover:translate-x-[2px]">
                  Color Variables in Figma
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.35)] tracking-[-0.01em] leading-[1.4] truncate">
                  A beginner's guide to creating and using variables
                </p>
              </div>
              <div className="size-[20px] shrink-0 relative opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity">
                  <ArrowUpRight />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight />
                </div>
              </div>
            </a>
            </div>
          </div>
        </section>

        <ExplorationsCanvas />

        {/* ─── Site Note ─── */}
        <section className="pb-[48px] lg:pb-[56px] animate-fade-in stagger-6">
          <button
            type="button"
            data-native-cursor="pointer"
            aria-expanded={siteNoteOpen}
            onClick={() => setSiteNoteOpen((open) => !open)}
            className="group flex w-full items-center gap-[10px] py-[4px] text-left"
          >
            <span className="font-['DM_Mono',sans-serif] text-[14px] text-[rgba(0,0,0,0.45)] transition-colors duration-200 group-hover:text-[#1a1a1a]">
              {siteNoteOpen ? "-" : "+"}
            </span>
            <span className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase opacity-40 transition-opacity duration-200 group-hover:opacity-70">
              A note about this site
            </span>
          </button>
          <AnimatePresence initial={false}>
            {siteNoteOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -4 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -4 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pt-[14px] font-['Inter',sans-serif] font-normal text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.52)] leading-[1.7]">
                  This portfolio is temporary by design. It brings together current work, older portfolio versions, and experiments from different stages of my practice. I keep them here because the work is always changing, and the older pieces still show how I think, build, and evolve.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ─── Contact / Footer ─── */}
        <footer id="contact" className="pb-[48px] lg:pb-[64px] animate-fade-in stagger-6 scroll-mt-[80px]">
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-[40px] lg:pt-[48px]">

            {/* Email */}
            <div className="mb-[32px] lg:mb-[40px]">
              <p className="font-['DM_Mono',sans-serif] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase text-[rgba(0,0,0,0.3)] mb-[8px]">
                Email
              </p>
              <button
                type="button"
                data-native-cursor="pointer"
                className="group inline-flex flex-wrap items-center gap-x-[10px] gap-y-[8px] font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[#1a1a1a] tracking-[-0.01em] cursor-pointer transition-[color,transform] duration-300 active:scale-[0.98]"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <span className="hover-underline">florencekey22@gmail.com</span>
                <span className="pointer-events-none inline-flex w-[50px] justify-center rounded-full bg-[rgba(0,0,0,0.05)] px-[8px] py-[4px] text-[11px] leading-none text-[rgba(0,0,0,0.45)] transition-[background-color,color,transform] duration-200 group-hover:translate-x-[2px] group-hover:bg-[rgba(0,0,0,0.08)] group-hover:text-[rgba(0,0,0,0.66)] group-focus-visible:translate-x-[2px] group-focus-visible:bg-[rgba(0,0,0,0.08)] group-focus-visible:text-[rgba(0,0,0,0.66)]">
                  {emailCopied ? "Copied" : "Copy"}
                </span>
                <AnimatePresence>
                  {emailCopied && (
                    <motion.span
                      initial={{ opacity: 0, y: 4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="sr-only"
                    >
                      Copied
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-[14px]">
              <p className="font-['DM_Mono',sans-serif] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase text-[rgba(0,0,0,0.3)]">
                Elsewhere
              </p>
              <div className="flex w-full flex-col items-stretch border-t border-[rgba(0,0,0,0.06)] sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-[24px] sm:gap-y-[10px] sm:border-t-0">
                <a
                  href="https://drive.google.com/file/d/16Ks4iwFGGpb4rLKmwYSJe02dyxFDNkQQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link border-b border-[rgba(0,0,0,0.06)] py-[18px] font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer sm:border-b-0 sm:py-0"
                >
                  <span>Resume</span>
                  <ArrowUpRightIcon aria-hidden="true" className="size-[13px] stroke-[1.8]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/florence-eze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link border-b border-[rgba(0,0,0,0.06)] py-[18px] font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer sm:border-b-0 sm:py-0"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon aria-hidden="true" className="size-[13px] stroke-[1.8]" />
                </a>
                <a
                  href="https://github.com/Judiedesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link border-b border-[rgba(0,0,0,0.06)] py-[18px] font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer sm:border-b-0 sm:py-0"
                >
                  <span>GitHub</span>
                  <ArrowUpRightIcon aria-hidden="true" className="size-[13px] stroke-[1.8]" />
                </a>
                <a
                  href="https://dribbble.com/janeyrexx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link border-b border-[rgba(0,0,0,0.06)] py-[18px] font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer sm:border-b-0 sm:py-0"
                >
                  <span>Dribbble</span>
                  <ArrowUpRightIcon aria-hidden="true" className="size-[13px] stroke-[1.8]" />
                </a>
                <a
                  href="https://www.behance.net/florenceeze1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link border-b border-[rgba(0,0,0,0.06)] py-[18px] font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer sm:border-b-0 sm:py-0"
                >
                  <span>Behance</span>
                  <ArrowUpRightIcon aria-hidden="true" className="size-[13px] stroke-[1.8]" />
                </a>
              </div>
            </div>

          </div>
        </footer>

      </div>

      {/* Decorative ambient light */}
      <div className="hidden lg:block fixed top-[120px] right-[8%] bg-[#ff3348] blur-[120px] h-[60px] w-[60px] overflow-clip animate-pulse-soft pointer-events-none opacity-50" />
    </div>
  );
}
