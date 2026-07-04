import { useState, useEffect } from 'react';
import First from '../imports/First';
import { CustomCursor } from './components/CustomCursor';
import { ProjectModal } from './components/ProjectModal';
import { getNextProjectId, getPrevProjectId } from './data/projects';

const siteTitle = 'Florence Eze - Product Designer & Web Builder';
const siteDescription = 'Florence Eze is a Product Designer and Web Builder based in Lagos, focused on UX strategy, interface design, responsive websites, and production-ready digital products.';
const ogDescription = 'Selected portfolio work from Florence Eze, a Product Designer and Web Builder based in Lagos.';
const ogImageUrl = '/og-image.svg';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

    // Open Graph meta tags
    setMetaTag('og:title', siteTitle);
    setMetaTag('og:description', ogDescription);
    setMetaTag('og:image', ogImageUrl);
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

    // Ensure the site is indexable (remove any noindex if present)
    const robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (robotsMeta?.content?.includes('noindex')) {
      robotsMeta.remove();
    }
    // Set robots to allow indexing
    setMetaName('robots', 'index, follow');
  }, []);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (selectedProject) {
      setSelectedProject(getNextProjectId(selectedProject));
    }
  };

  const handlePrevProject = () => {
    if (selectedProject) {
      setSelectedProject(getPrevProjectId(selectedProject));
    }
  };

  const handleJumpToProject = (projectId: number) => {
    setSelectedProject(projectId);
  };

  return (
    <>
      <CustomCursor />
      <First onProjectClick={handleProjectClick} />
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
