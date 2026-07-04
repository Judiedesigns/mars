import { useEffect, useState, useRef } from 'react';
import svgPaths from '../../imports/svg-73q1axz7qe';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [colorIndex, setColorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isOverModal, setIsOverModal] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // Change color every 100px scrolled

  const colors = ['#648CD6', '#E8394B', '#3369CC'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over a project card
      const target = e.target as HTMLElement;
      const projectCard = target.closest('.project-card');
      setIsHoveringProject(!!projectCard);

      // Check if hovering over the modal
      const modal = target.closest('.project-modal');
      setIsOverModal(!!modal);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringProject(false);
      setIsOverModal(false);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
      
      if (scrollDiff >= scrollThreshold) {
        setColorIndex((prev) => (prev + 1) % colors.length);
        lastScrollY.current = currentScrollY;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  // Use white color when over modal, otherwise use the scroll-based color
  const currentColor = isOverModal ? '#FFFFFF' : colors[colorIndex];

  return (
    <div
      className={`custom-cursor ${isHoveringProject ? 'project-hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: currentColor,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="cursor-content">
        <div className="cursor-text">View</div>
        <svg className="cursor-arrow" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.pd49f500} fill="white" />
        </svg>
      </div>
    </div>
  );
}