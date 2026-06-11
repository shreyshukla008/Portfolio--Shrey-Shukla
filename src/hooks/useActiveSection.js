import { useState, useEffect } from "react";

export function useActiveSection(sectionIds, scrollRootRef) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const root = scrollRootRef?.current;
    if (!root || sectionIds.length === 0) return;

    let frameId = null;

    const updateActiveSection = () => {
      const rootRect = root.getBoundingClientRect();
      const marker = rootRect.top + rootRect.height * 0.35;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [sectionIds, scrollRootRef]);

  return activeSection;
}
