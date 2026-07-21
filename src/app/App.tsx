import { useState, useEffect } from 'react';
import First from '../imports/First';
import { CustomCursor } from './components/CustomCursor';
import { AlorsCaseStudy } from './components/AlorsCaseStudy';
import { BrimStudiosCaseStudy } from './components/BrimStudiosCaseStudy';
import { CaterShopCaseStudy } from './components/CaterShopCaseStudy';
import { LettersCaseStudy } from './components/LettersCaseStudy';
import { PortfolioV1CaseStudy } from './components/PortfolioV1CaseStudy';
import { PortfolioV2CaseStudy } from './components/PortfolioV2CaseStudy';
import { ShopEasyCaseStudy } from './components/ShopEasyCaseStudy';
import { StandardProjectCaseStudy } from './components/StandardProjectCaseStudy';
import { VirtualConferenceCaseStudy } from './components/VirtualConferenceCaseStudy';
import {
  getNextProjectId,
  getProjectById,
  getProjectByRoute,
  getWorkFilterForProject,
  projectIdByRoute,
  projectRoutes,
  projects,
  workFilters,
} from './data/projects';

const siteTitle = 'Florence Eze - Product Designer & Web Builder';
const siteDescription = 'Florence Eze is a Product Designer and Web Builder based in Lagos, focused on UX strategy, interface design, responsive websites, and product-ready digital products.';
const ogDescription = 'Selected portfolio work from Florence Eze, a Product Designer and Web Builder based in Lagos.';
const siteUrl = 'https://florence-eze-portfolio.framer.website/';
const ogImageUrl = `${siteUrl}og-image.png`;

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [caseStudyDragProgress, setCaseStudyDragProgress] = useState(0);
  const [caseStudyBackdropOpen, setCaseStudyBackdropOpen] = useState(false);
  const [lastWorkFilter, setLastWorkFilter] = useState<(typeof workFilters)[number]>("Selected Work");
  const isCaseStudyPath = currentPath in projectIdByRoute;

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
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
    const route = projectRoutes[projectId];

    if (!route) return;

    setLastWorkFilter(getWorkFilterForProject(projectId));
    window.history.pushState({}, '', route);
    setCurrentPath(route);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToWork = () => {
    setCaseStudyDragProgress(0);
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ block: 'start' });
    }, 0);
  };

  const renderCaseStudyShell = (children: React.ReactNode) => (
    <div className="relative min-h-screen bg-[#1b1b1b]">
      <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-[#fafafa]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[178px] bg-[#1b1b1b]">
          <div className="mx-auto mt-[17px] h-[126px] w-[92vw] max-w-[1354px] rounded-t-[22px] bg-[#8a8a8a] opacity-75" />
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

  const currentProjectId = projectIdByRoute[currentPath];

  useEffect(() => {
    if (!currentProjectId) return;

    setLastWorkFilter(getWorkFilterForProject(currentProjectId));
  }, [currentProjectId]);

  useEffect(() => {
    if (!isCaseStudyPath) return;

    const activeProject = getProjectByRoute(currentPath);
    document.title = `${activeProject?.title ?? 'Project'} Case Study - Florence Eze`;

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

  const sharedCaseStudyProps = {
    hasWorkBackdrop: true,
    onDragProgressChange: setCaseStudyDragProgress,
  };

  const renderStandardCaseStudy = (projectId: number) => {
    const nextProjectId = getNextProjectId(projectId);

    return renderCaseStudyShell(
      <StandardProjectCaseStudy
        projectId={projectId}
        onBack={handleBackToWork}
        onOpenNextProject={() => handleProjectClick(nextProjectId)}
        nextProjectLabel={getProjectById(nextProjectId)?.title}
        {...sharedCaseStudyProps}
      />
    );
  };

  const renderActiveRoute = () => {
    switch (currentPath) {
      case '/work/shop-easy':
        return renderCaseStudyShell(
          <ShopEasyCaseStudy
            onBack={handleBackToWork}
            onOpenLetters={() => handleProjectClick(7)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/letters':
        return renderCaseStudyShell(
          <LettersCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(18)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/cater-shop':
        return renderCaseStudyShell(
          <CaterShopCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(4)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/brim-studios':
        return renderCaseStudyShell(
          <BrimStudiosCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(1)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/portfolio-v1':
        return renderCaseStudyShell(
          <PortfolioV1CaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(5)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/portfolio-v2':
        return renderCaseStudyShell(
          <PortfolioV2CaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(3)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/virtual-conference':
        return renderCaseStudyShell(
          <VirtualConferenceCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(15)}
            {...sharedCaseStudyProps}
          />
        );
      case '/work/alors':
        return renderCaseStudyShell(
          <AlorsCaseStudy
            onBack={handleBackToWork}
            onOpenNextProject={() => handleProjectClick(3)}
            {...sharedCaseStudyProps}
          />
        );
      default:
        return currentProjectId ? (
          renderStandardCaseStudy(currentProjectId)
        ) : (
          <First
            onProjectClick={handleProjectClick}
            initialActiveFilter={lastWorkFilter}
            onFilterChange={setLastWorkFilter}
          />
        );
    }
  };

  return (
    <>
      <CustomCursor />
      {renderActiveRoute()}
    </>
  );
}
