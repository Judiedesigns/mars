import imgImage100 from "../imports/img2.png";
import imgImage99 from "../imports/img3.png";
import ArrowUpRight from "./ArrowUpRight-28-2166";
import ArrowRight from "./ArrowRight";
import ProfilePictureShader from "../app/components/ProfilePictureShader";
import { ExplorationsCanvas } from "../app/components/ExplorationsCanvas";
import { projects, workFilters, type ProjectMedia } from "../app/data/projects";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type FirstProps = {
  onProjectClick?: (projectId: number) => void;
};

const initialProjectCount = 6;
const projectRevealStep = 2;

function ProjectPreviewMedia({ media, title }: { media: ProjectMedia; title: string }) {
  if (media.type === "video") {
    return (
      <video
        aria-label={media.alt ?? `${title} preview`}
        className="object-cover pointer-events-none size-full transition-transform duration-[650ms] ease-out group-hover:scale-[1.035]"
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <img
      alt={media.alt ?? title}
      className="object-cover pointer-events-none size-full transition-transform duration-[650ms] ease-out group-hover:scale-[1.035]"
      src={media.src}
    />
  );
}

export default function First({ onProjectClick }: FirstProps) {
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjectCount, setVisibleProjectCount] = useState(initialProjectCount);
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);
  const remainingProjectCount = Math.max(filteredProjects.length - visibleProjectCount, 0);

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
      <div className="max-w-[660px] w-full mx-auto px-[20px] sm:px-[24px] md:px-[32px] lg:px-[0]">

        {/* ─── Navigation ─── */}
        <nav className="flex items-center justify-between py-[24px] lg:py-[32px] animate-fade-in-down">

          <p className="font-['DM_Mono',sans-serif] text-[15px] lg:text-[16px] text-[#1a1a1a] tracking-[-0.02em]">
            Florence Eze
          </p>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="font-['DM_Mono',sans-serif] text-[14px] lg:text-[15px] text-[rgba(0,0,0,0.5)] tracking-[-0.01em] rainbow-hover cursor-pointer p-[4px] hover:text-[#1a1a1a] transition-colors duration-300"
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

          {/* Role — direct signal without changing the quiet rhythm */}
          <div className="mb-[44px] lg:mb-[56px] animate-fade-in stagger-2">
            <p className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] leading-[1.4] tracking-[0.08em] uppercase mb-[14px] opacity-40">
              Florence Eze
            </p>
            <h1 className="font-['Inter',sans-serif] font-medium text-[#1a1a1a] text-[27px] sm:text-[32px] lg:text-[36px] leading-[1.12] tracking-[-0.04em] max-w-[620px]">
              Designing interfaces, websites, and AI prototypes.
            </h1>
            <p className="font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.4)] leading-[1.5] mt-[12px]">
              Product & Visual Designer · Web Builder
            </p>
          </div>

          {/* About — supporting, not competing */}
          <div className="animate-fade-in stagger-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
              <div className="sm:col-span-2">
                <p className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase mb-[16px] opacity-40">
                  About
                </p>
                <p className="max-w-full font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[rgba(0,0,0,0.55)] leading-[1.7] break-words [overflow-wrap:anywhere]">
                  {`I'm a product and visual designer, and a web builder creating clear interfaces, responsive websites, and AI-assisted prototypes. I turn early ideas and product requirements into polished flows, usable screens, and launch-ready digital experiences. I'm drawn to complex problems, simplifying systems, and interfaces that feel effortless to use.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Projects ─── */}
        <section id="projects" className="pb-[72px] lg:pb-[96px] scroll-mt-[80px] animate-fade-in stagger-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
            <p className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase mb-[18px] opacity-40 sm:col-span-2">
              Selected work
            </p>
          </div>

          <div className="relative mb-[32px] lg:mb-[40px]">
            <div
              className="flex max-w-full gap-[6px] overflow-x-auto pb-[6px] pr-[28px] touch-pan-x snap-x work-filter-scroll"
              role="tablist"
              aria-label="Selected work filters"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[40px] sm:gap-y-[48px]">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((proj) => (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => onProjectClick?.(proj.id)}
                  className="flex flex-col items-start project-card cursor-pointer group"
                >
                  {/* Thumbnail with background fill and padding */}
                  <div className="bg-[#F2F2F2] w-full p-[12px] rounded-[8px] mb-[16px] sm:mb-[18px] transition-[background-color,box-shadow,transform] duration-[450ms] ease-out group-hover:bg-[#eeeeee] group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.055)]">
                    <div className="bg-[#efefef] w-full aspect-[3/2] overflow-hidden rounded-[6px]">
                      <ProjectPreviewMedia media={proj.cover} title={proj.title} />
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
          </div>

          {remainingProjectCount > 0 && (
            <div className="flex justify-center mt-[48px] lg:mt-[56px]">
              <button
                type="button"
                onClick={() => setVisibleProjectCount((count) => count + projectRevealStep)}
                className="group rounded-full border border-[rgba(0,0,0,0.18)] px-[34px] sm:px-[44px] py-[17px] sm:py-[20px] font-['Inter',sans-serif] text-[16px] sm:text-[18px] font-medium tracking-[-0.03em] text-[#1a1a1a] transition-[background-color,border-color,color,box-shadow,transform] duration-300 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#fafafa] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] active:scale-[0.98]"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-1px]">
                  See More Projects ({remainingProjectCount})
                </span>
              </button>
            </div>
          )}
        </section>

        {/* ─── Writings ─── */}
        <section className="pb-[72px] lg:pb-[96px] animate-fade-in stagger-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
            <p className="font-['DM_Mono',sans-serif] font-medium text-[#1a1a1a] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase mb-[24px] lg:mb-[32px] opacity-40 sm:col-span-2">
              Writing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px]">
            <div className="flex flex-col gap-[2px] sm:col-span-2">
            {/* Article 1 */}
            <a
              href="https://medium.com/@juddblck2/visual-design-principles-for-web-design-b43c3fe23268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[14px] sm:gap-[16px] py-[14px] sm:py-[16px] rounded-[8px] px-[4px] -mx-[4px] hover:bg-[rgba(0,0,0,0.03)] transition-[background-color,transform] duration-[250ms] group"
            >
              <div className="h-[48px] sm:h-[52px] w-[68px] sm:w-[76px] shrink-0 rounded-[4px] overflow-hidden">
                <img alt="Visual Hierarchy" className="object-cover size-full" src={imgImage100} />
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

            {/* Article 2 */}
            <a
              href="https://medium.com/@juddblck2/what-are-variables-ab89fb4f43ba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[14px] sm:gap-[16px] py-[14px] sm:py-[16px] rounded-[8px] px-[4px] -mx-[4px] hover:bg-[rgba(0,0,0,0.03)] transition-[background-color,transform] duration-[250ms] group"
            >
              <div className="h-[48px] sm:h-[52px] w-[68px] sm:w-[76px] shrink-0 rounded-[4px] overflow-hidden">
                <img alt="Figma Color Variables" className="object-cover size-full" src={imgImage99} />
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
                className="group relative inline-flex items-center gap-[10px] font-['Inter',sans-serif] font-normal text-[15px] lg:text-[16px] text-[#1a1a1a] tracking-[-0.01em] cursor-pointer transition-[color,transform] duration-300 active:scale-[0.98]"
                onClick={handleCopyEmail}
              >
                <span className="hover-underline">florencekey22@gmail.com</span>
                <AnimatePresence>
                  {emailCopied && (
                    <motion.span
                      initial={{ opacity: 0, y: 4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-full bg-[rgba(0,0,0,0.06)] px-[8px] py-[3px] text-[11px] text-[rgba(0,0,0,0.55)]"
                    >
                      Copied
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Social */}
            <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[0px] sm:items-center">
              <p className="font-['DM_Mono',sans-serif] text-[11px] lg:text-[12px] tracking-[0.08em] uppercase text-[rgba(0,0,0,0.3)] sm:mr-[24px]">
                Elsewhere
              </p>
              <div className="flex flex-wrap items-center gap-x-[10px] gap-y-[8px]">
                <a
                  href="https://drive.google.com/file/d/16Ks4iwFGGpb4rLKmwYSJe02dyxFDNkQQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer"
                >
                  Resume
                </a>
                <span className="text-[rgba(0,0,0,0.2)] text-[8px]">●</span>
                <a
                  href="https://www.linkedin.com/in/florence-eze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer"
                >
                  LinkedIn
                </a>
                <span className="text-[rgba(0,0,0,0.2)] text-[8px]">●</span>
                <a
                  href="https://github.com/Judiedesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer"
                >
                  GitHub
                </a>
                <span className="text-[rgba(0,0,0,0.2)] text-[8px]">●</span>
                <a
                  href="https://dribbble.com/janeyrexx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer"
                >
                  Dribbble
                </a>
                <span className="text-[rgba(0,0,0,0.2)] text-[8px]">●</span>
                <a
                  href="https://www.behance.net/florenceeze1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inter',sans-serif] text-[14px] lg:text-[15px] text-[#1a1a1a] tracking-[-0.01em] social-link rainbow-hover cursor-pointer"
                >
                  Behance
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
