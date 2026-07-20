import { useState, useEffect } from 'react';
import First from '../imports/First';
import { CustomCursor } from './components/CustomCursor';
import { ProjectModal } from './components/ProjectModal';
import { BrimStudiosCaseStudy } from './components/BrimStudiosCaseStudy';
import { CaterShopCaseStudy } from './components/CaterShopCaseStudy';
import { LettersCaseStudy } from './components/LettersCaseStudy';
import { ShopEasyCaseStudy } from './components/ShopEasyCaseStudy';
import { getNextModalProjectId, getPrevModalProjectId } from './data/projects';

const siteTitle = 'Florence Eze - Product Designer & Web Builder';
const siteDescription = 'Florence Eze is a Product Designer and Web Builder based in Lagos, focused on UX strategy, interface design, responsive websites, and product-ready digital products.';
const ogDescription = 'Selected portfolio work from Florence Eze, a Product Designer and Web Builder based in Lagos.';
const siteUrl = 'https://florence-eze-portfolio.framer.website/';
const ogImageUrl = `${siteUrl}og-image.png`;

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [caseStudyDragProgress, setCaseStudyDragProgress] = useState(0);
  const [caseStudyBackdropOpen, setCaseStudyBackdropOpen] = useState(false);
  const isCaseStudyPath =
    currentPath === '/work/shop-easy' ||
    currentPath === '/work/cater-shop' ||
    currentPath === '/work/letters' ||
    currentPath === '/work/brim-studios';

  useEffect(() => {
    // Set page title
    document.title = siteTitle;

    // Set favicon
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'icon';
    favicon.href = 'https://app.paper.design/file-assets/01K76RGJ661X8DGVDW2X6AY52C/01KPXJSZEKCS86873Q2ZKTB2J7.png';
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(favicon);
    }

    // Set meta tags for social media
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setLinkRel = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Open Graph meta tags
    setMetaTag('og:title', siteTitle);
    setMetaTag('og:description', ogDescription);
    setMetaTag('og:image', ogImageUrl);
    setMetaTag('og:url', siteUrl);
    setMetaTag('og:site_name', 'Florence Eze Portfolio');
    setMetaTag('og:image:width', '1200');
    setMetaTag('og:image:height', '630');
    setMetaTag('og:type', 'website');

    // Twitter Card meta tags
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', siteTitle);
    setMetaName('twitter:description', ogDescription);
    setMetaName('twitter:image', ogImageUrl);

    // Description meta tag
    setMetaName('description', siteDescription);
    setMetaName('keywords', 'Florence Eze, product designer, UX designer, visual designer, web builder, interface design, portfolio');
    setLinkRel('canonical', siteUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Florence Eze',
      url: siteUrl,
      jobTitle: 'Product Designer and Web Builder',
      sameAs: [
        'https://www.linkedin.com/in/florence-eze',
        'https://github.com/Judiedesigns',
        'https://dribbble.com/janeyrexx',
        'https://www.behance.net/florenceeze1',
      ],
    };

    let jsonLd = document.querySelector('script[data-seo="person-json-ld"], script[type="application/ld+json"]') as HTMLScriptElement;
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.dataset.seo = 'person-json-ld';
    jsonLd.textContent = JSON.stringify(structuredData);

    // Ensure the site is indexable (remove any noindex if present)
    const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (robotsMeta?.content?.includes('noindex')) {
      robotsMeta.remove();
    }
    // Set robots to allow indexing
    setMetaName('robots', 'index, follow');
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setSelectedProject(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoaded(true);
      return;
    }

    const finishLoading = () => setIsLoaded(true);
    const fallback = window.setTimeout(finishLoading, 900);

    window.addEventListener('load', finishLoading, { once: true });
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener('load', finishLoading);
    };
  }, []);

  useEffect(() => {
    if (!isCaseStudyPath) {
      setCaseStudyBackdropOpen(false);
      return;
    }

    setCaseStudyBackdropOpen(false);
    const frame = window.requestAnimationFrame(() => {
      setCaseStudyBackdropOpen(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isCaseStudyPath]);

  const handleProjectClick = (projectId: number) => {
    if (projectId === 6) {
      window.history.pushState({}, '', '/work/shop-easy');
      setCurrentPath('/work/shop-easy');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (projectId === 18) {
      window.history.pushState({}, '', '/work/cater-shop');
      setCurrentPath('/work/cater-shop');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (projectId === 4) {
      window.history.pushState({}, '', '/work/brim-studios');
      setCurrentPath('/work/brim-studios');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (projectId === 7) {
      window.history.pushState({}, '', '/work/letters');
      setCurrentPath('/work/letters');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    setSelectedProject(projectId);
  };

  const handleBackToWork = () => {
    setCaseStudyDragProgress(0);
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    setSelectedProject(null);
    window.setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ block: 'start' });
    }, 0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (selectedProject) {
      setSelectedProject(getNextModalProjectId(selectedProject));
    }
  };

  const handlePrevProject = () => {
    if (selectedProject) {
      setSelectedProject(getPrevModalProjectId(selectedProject));
    }
  };

  const handleJumpToProject = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const renderCaseStudyShell = (children: React.ReactNode) => (
    <div className="relative min-h-screen bg-[#1b1b1b]">
      <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-[#fafafa]">
        <div className="pointer-events-none -translate-y-[520px] opacity-70">
          <First onProjectClick={handleProjectClick} />
        </div>
        <div
          className="absolute inset-0 bg-[#111111] will-change-[opacity]"
          style={{
            opacity: (caseStudyBackdropOpen ? 0.68 : 0) - caseStudyDragProgress * 0.18,
            transition: caseStudyDragProgress === 0 ? 'opacity 420ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
          }}
        />
      </div>
      {children}
    </div>
  );

  useEffect(() => {
    if (!isCaseStudyPath) return;

    document.title = currentPath === '/work/brim-studios'
      ? 'Brim Studios Case Study - Florence Eze'
      : currentPath === '/work/cater-shop'
      ? 'Cater Shop Case Study - Florence Eze'
      : currentPath === '/work/letters'
        ? 'Letters Case Study - Florence Eze'
        : 'ShopEasy Case Study - Florence Eze';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleBackToWork();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.title = siteTitle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPath, isCaseStudyPath]);

  return (
    <>
      <div
        aria-hidden={isLoaded}
        className={`fixed inset-0 z-[100] grid place-items-center bg-[#fafafa] transition-opacity duration-500 ease-out ${
          isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <span className="font-['DM_Mono',sans-serif] text-[11px] tracking-[0.12em] uppercase text-[rgba(0,0,0,0.38)]">
          Florence Eze
        </span>
      </div>
      <CustomCursor />
      {currentPath === '/work/shop-easy' ? (
        renderCaseStudyShell(
          <ShopEasyCaseStudy
            onBack={handleBackToWork}
            onOpenLetters={() => handleProjectClick(7)}
            hasWorkBackdrop
            onDragProgressChange={setCaseStudyDragProgress}
          />
        )
      ) : currentPath === '/work/letters' ? (
        renderCaseStudyShell(
          <LettersCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(18)}
            hasWorkBackdrop
            onDragProgressChange={setCaseStudyDragProgress}
          />
        )
      ) : currentPath === '/work/cater-shop' ? (
        renderCaseStudyShell(
          <CaterShopCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(4)}
            hasWorkBackdrop
            onDragProgressChange={setCaseStudyDragProgress}
          />
        )
      ) : currentPath === '/work/brim-studios' ? (
        renderCaseStudyShell(
          <BrimStudiosCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => setSelectedProject(1)}
            hasWorkBackdrop
            onDragProgressChange={setCaseStudyDragProgress}
          />
        )
      ) : (
        <First onProjectClick={handleProjectClick} />
      )}
      {selectedProject && (
        <ProjectModal
          projectId={selectedProject}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
          onJumpTo={handleJumpToProject}
        />
      )}
    </>
  );
}
