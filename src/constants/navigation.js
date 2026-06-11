export const SECTION_IDS = {
  HERO: "HeroSection",
  ABOUT: "AboutMeSection",
  PROJECTS: "ProjectSection",
  ACHIEVEMENTS: "AandCsection",
  SKILLS: "SkillsSection",
  CONTACT: "ContactMeSection",
};

export const NAV_ITEMS = [
  { sectionId: SECTION_IDS.HERO, icon: "icon-home", label: "Home" },
  { sectionId: SECTION_IDS.ABOUT, icon: "icon-info", label: "About" },
  { sectionId: SECTION_IDS.PROJECTS, icon: "icon-calculator", label: "Projects" },
  { sectionId: SECTION_IDS.ACHIEVEMENTS, icon: "icon-badge", label: "Achievements" },
  { sectionId: SECTION_IDS.SKILLS, icon: "icon-wrench", label: "Skills" },
  { sectionId: SECTION_IDS.CONTACT, icon: "icon-speech", label: "Contact" },
];

export const SECTION_ID_LIST = NAV_ITEMS.map((item) => item.sectionId);
