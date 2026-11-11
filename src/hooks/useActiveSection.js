
import { useEffect, useState } from 'react';

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'contact',
];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace('#', '');

    return sectionIds.includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.65;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= scrollPosition) {
          currentSection = id;
        }
      });

      // Handle reaching the bottom of the page.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');

      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Initial active section
    updateActiveSection();

    // Listen for scrolling
    window.addEventListener(
      'scroll',
      updateActiveSection,
      { passive: true }
    );

    // Listen for navigation clicks and browser history
    window.addEventListener(
      'hashchange',
      handleHashChange
    );

    window.addEventListener(
      'resize',
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection
      );

      window.removeEventListener(
        'hashchange',
        handleHashChange
      );

      window.removeEventListener(
        'resize',
        updateActiveSection
      );
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
