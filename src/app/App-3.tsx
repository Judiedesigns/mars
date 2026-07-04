import { useState, useEffect } from 'react';
import First from '../imports/First';
import { CustomCursor } from './components/CustomCursor';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    // Set page title
    document.title = 'Florence Eze - Product Designer · Model Designer';

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
    setMetaTag('og:title', 'Florence Eze - Product Designer · Model Designer');
    setMetaTag('og:description', "I design pixel execution of design projects. I'm a UX Designer transitioning into software engineering — driven by curiosity and creativity.");
    setMetaTag('og:image', 'https://app.paper.design/file-assets/01K76RGJ661X8DGVDW2X6AY52C/01KPXJSZEKCS86873Q2ZKTB2J7.png');
    setMetaTag('og:type', 'website');

    // Twitter Card meta tags
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', 'Florence Eze - Product Designer · Model Designer');
    setMetaName('twitter:description', "I design pixel execution of design projects. I'm a UX Designer transitioning into software engineering — driven by curiosity and creativity.");
    setMetaName('twitter:image', 'https://app.paper.design/file-assets/01K76RGJ661X8DGVDW2X6AY52C/01KPXJSZEKCS86873Q2ZKTB2J7.png');

    // Description meta tag
    setMetaName('description', "I design pixel execution of design projects. I'm a UX Designer transitioning into software engineering — driven by curiosity and creativity.");
  }, []);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (selectedProject) {
      const nextId = selectedProject === 4 ? 1 : selectedProject + 1;
      setSelectedProject(nextId);
    }
  };

  const handlePrevProject = () => {
    if (selectedProject) {
      const prevId = selectedProject === 1 ? 4 : selectedProject - 1;
      setSelectedProject(prevId);
    }
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
        />
      )}
    </>
  );
}