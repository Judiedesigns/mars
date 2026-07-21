import { useEffect, useRef } from 'react';
import svgPaths from '../../imports/svg-73q1axz7qe';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const colorIndex = useRef(0);
  const frameRef = useRef<number | null>(null);
  const latestPosition = useRef({ x: -100, y: -100 });
  const scrollThreshold = 100; // Change color every 100px scrolled

  const colors = ['#648CD6', '#E8394B', '#3369CC'];

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const setCursorVisibility = (isVisible: boolean) => {
      cursor.style.opacity = isVisible ? '1' : '0';
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestPosition.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const projectCard = target.closest('.project-card');
      const link = target.closest('a, [role="link"], .social-link, .footer-social-link');
      const nativeCursorTarget = target.closest('[data-native-cursor]');
      const shouldShowCustomCursor = !link && !nativeCursorTarget;

      cursor.classList.toggle('project-hover', !!projectCard);
      setCursorVisibility(shouldShowCustomCursor);

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        const { x, y } = latestPosition.current;
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      });
    };

    const handleMouseLeave = () => {
      setCursorVisibility(false);
      cursor.classList.remove('project-hover');
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
      
      if (scrollDiff >= scrollThreshold) {
        colorIndex.current = (colorIndex.current + 1) % colors.length;
        cursor.style.backgroundColor = colors[colorIndex.current];
        lastScrollY.current = currentScrollY;
      }
    };

    cursor.style.backgroundColor = colors[colorIndex.current];
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ opacity: 0 }}
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
