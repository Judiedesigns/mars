import { useEffect, useState } from 'react';
import svgPaths from '../../imports/svg-cq181jvxo1';
import { projects, type ProjectMedia } from '../data/projects';

type ProjectModalProps = {
  projectId: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onJumpTo?: (id: number) => void;
};

function ProjectHeroMedia({ media, title }: { media: ProjectMedia; title: string }) {
  const objectFitClass = media.fit === "contain" ? "object-contain" : "object-cover";

  if (media.type === "video") {
    return (
      <video
        aria-label={media.alt ?? `${title} demo`}
        className={`absolute inset-0 ${objectFitClass} size-full`}
        src={media.src}
        autoPlay
        controls
        muted
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <img
      alt={media.alt ?? title}
      className={`absolute inset-0 ${objectFitClass} size-full`}
      src={media.src}
    />
  );
}

const modalAccent = "#3a5fa0";

export function ProjectModal({ projectId, onClose, onNext, onPrev, onJumpTo }: ProjectModalProps) {
  const project = projects.find(p => p.id === projectId);
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const [isClosing, setIsClosing] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const prevProject = projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1];
  const nextProject = projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleNext = () => {
    if (isChanging) return;
    setIsChanging(true);
    setTimeout(() => {
      onNext();
      setIsChanging(false);
    }, 200);
  };

  const handlePrev = () => {
    if (isChanging) return;
    setIsChanging(true);
    setTimeout(() => {
      onPrev();
      setIsChanging(false);
    }, 200);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyboard = (e: KeyboardEvent) => {
      // ESC to close
      if (e.key === 'Escape') handleClose();

      // Arrow keys for navigation
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();

      // Number keys 1-9 jump to the first nine projects.
      const numKey = parseInt(e.key);
      if (numKey >= 1 && numKey <= Math.min(projects.length, 9) && onJumpTo) {
        const targetProject = projects[numKey - 1];
        if (!targetProject || isChanging || targetProject.id === projectId) return;
        setIsChanging(true);
        setTimeout(() => {
          onJumpTo(targetProject.id);
          setIsChanging(false);
        }, 200);
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [projectId, isChanging]);

  if (!project) return null;

  return (
    <div className={`fixed inset-0 z-50 project-modal ${isClosing ? 'closing' : ''}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-xl modal-backdrop ${isClosing ? 'closing' : ''}`}
        onClick={handleClose}
      />

      {/* Full layout: side arrows + centered modal */}
      <div className="relative size-full flex items-center justify-center py-[16px] sm:py-[24px]">

        {/* Desktop side arrows — always visible, flanking the modal */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute left-[24px] xl:left-[40px] top-1/2 -translate-y-1/2 z-10 size-[52px] rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] items-center justify-center cursor-pointer transition-[background-color,border-color,transform] duration-200 ease-out active:scale-[0.96] group"
        >
          <svg className="size-[20px] transition-transform duration-200 group-hover:-translate-x-[2px]" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1d04f480} fill="rgba(255,255,255,0.8)" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-[24px] xl:right-[40px] top-1/2 -translate-y-1/2 z-10 size-[52px] rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] items-center justify-center cursor-pointer transition-[background-color,border-color,transform] duration-200 ease-out active:scale-[0.96] group"
        >
          <svg className="size-[20px] transition-transform duration-200 group-hover:translate-x-[2px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p24860100} fill="rgba(255,255,255,0.8)" />
          </svg>
        </button>

        {/* Modal Shell */}
        <div className={`relative w-full max-h-full max-w-[820px] mx-[16px] sm:mx-[32px] md:mx-[48px] lg:mx-auto modal-content ${isClosing ? 'closing' : ''}`}>
          <div className="bg-[#4a72b8] rounded-[12px] w-full flex flex-col max-h-[calc(100vh-32px)] sm:max-h-[calc(100vh-48px)]">

            {/* Top Bar — close + counter */}
            <div className="flex items-center justify-between px-[16px] sm:px-[24px] lg:px-[40px] pt-[16px] sm:pt-[20px] pb-[10px] sm:pb-[12px] shrink-0">
              <span className="font-['DM_Mono',sans-serif] text-[11px] sm:text-[12px] text-[rgba(255,255,255,0.4)] tracking-[0.08em] uppercase">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); handleClose(); }}
                className="size-[32px] rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.18)] flex items-center justify-center cursor-pointer transition-[background-color,transform] duration-150 ease-out active:scale-[0.94]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p5ff8500} fill="rgba(255,255,255,0.7)" />
                </svg>
              </button>
            </div>

            {/* Content area - scrollable if needed */}
            <div className={`flex-1 overflow-y-auto overflow-x-hidden px-[16px] sm:px-[24px] lg:px-[40px] pb-[16px] sm:pb-[20px] ${isChanging ? 'modal-project-change' : ''}`}>

              {/* Project Image — hero */}
              <div className="w-full aspect-[16/11] sm:aspect-[16/10] relative rounded-[8px] overflow-hidden mb-[16px] sm:mb-[20px] lg:mb-[28px]">
                <ProjectHeroMedia media={project.media?.[0] ?? project.cover} title={project.title} />
              </div>

              {/* Project Info */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[16px] lg:gap-[32px] mb-[16px] sm:mb-[20px] lg:mb-[28px]">

                {/* Title + Meta */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-['Inter',sans-serif] font-medium text-[22px] sm:text-[28px] lg:text-[34px] text-white tracking-[-0.02em] leading-[1.15] mb-[10px] sm:mb-[12px]">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-[12px] sm:gap-x-[16px] gap-y-[6px] font-['Inter',sans-serif] text-[12px] sm:text-[13px] lg:text-[14px] text-[rgba(255,255,255,0.5)] tracking-[-0.01em]">
                    <span>{project.year}</span>
                    <span className="inline-block size-[3px] rounded-full bg-[rgba(255,255,255,0.25)]" />
                    <span>{project.role}</span>
                    <span className="inline-block size-[3px] rounded-full bg-[rgba(255,255,255,0.25)]" />
                    <span>{project.category}</span>
                  </div>
                  <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] lg:text-[15px] text-[rgba(255,255,255,0.72)] leading-[1.55] tracking-[-0.01em] mt-[12px] max-w-[560px]">
                    {project.description}
                  </p>
                </div>

                {/* Live Link CTA */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-[8px] bg-white rounded-full px-[18px] sm:px-[22px] lg:px-[24px] py-[9px] sm:py-[11px] lg:py-[12px] hover:bg-[rgba(255,255,255,0.92)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-[background-color,box-shadow,transform] duration-300 shrink-0 self-start lg:self-center active:scale-[0.98]"
                    style={{ color: modalAccent }}
                  >
                    <span className="font-['Inter',sans-serif] font-medium text-[12px] sm:text-[13px] lg:text-[14px] tracking-[-0.01em]">
                      View project
                    </span>
                    <svg className="size-[14px] sm:size-[15px] lg:size-[16px] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p22c9cb00} fill={modalAccent} />
                    </svg>
                  </a>
                )}
              </div>

              {/* Mobile/Tablet bottom nav — visible below lg */}
              <div className="lg:hidden border-t border-[rgba(255,255,255,0.12)] pt-[16px] sm:pt-[18px]">
                <div className="flex items-center justify-between gap-[12px]">
                  <button
                    onClick={handlePrev}
                    className="group flex items-center gap-[8px] sm:gap-[10px] cursor-pointer transition-transform duration-150 ease-out active:scale-[0.97] min-w-0"
                  >
                    <div className="size-[36px] sm:size-[40px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                      <svg className="size-[16px] sm:size-[18px]" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p1d04f480} fill="rgba(255,255,255,0.8)" />
                      </svg>
                    </div>
                    <span className="font-['Inter',sans-serif] text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.6)] tracking-[-0.01em] truncate">
                      {prevProject.title}
                    </span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="group flex items-center gap-[8px] sm:gap-[10px] cursor-pointer transition-transform duration-150 ease-out active:scale-[0.97] min-w-0"
                  >
                    <span className="font-['Inter',sans-serif] text-[12px] sm:text-[13px] text-[rgba(255,255,255,0.6)] tracking-[-0.01em] truncate">
                      {nextProject.title}
                    </span>
                    <div className="size-[36px] sm:size-[40px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                      <svg className="size-[16px] sm:size-[18px]" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p24860100} fill="rgba(255,255,255,0.8)" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
