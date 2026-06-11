import { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/hero/Hero";
import AboutMe from "@/features/about/AboutMe";
import Projects from "@/features/projects/Projects";
import Achievements from "@/features/achievements/Achievements";
import Skills from "@/features/skills/Skills";
import ContactMe from "@/features/contact/ContactMe";
import { SECTION_ID_LIST } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

function App() {
  const scrollRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_ID_LIST, scrollRef);

  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-x-hidden overflow-y-auto viga-regular"
    >
      <Sidebar activeSection={activeSection} variant="rail" />

      <button
        type="button"
        className={`fixed left-0 top-1/2 z-[1000] -translate-y-1/2 rounded-r-xl border border-[#756eda]/40 border-l-0 bg-[#4e45d5]/50 py-3 pl-1 pr-2 text-xl text-slate-100 shadow-[0_0_20px_rgba(78,69,213,0.45)] backdrop-blur-md transition duration-300 hover:bg-[#665de8]/70 lg:hidden ${
          isSidebarOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open navigation"
      >
        <span className="icon-arrow-right" />
      </button>

      {isSidebarOpen && (
        <Sidebar
          activeSection={activeSection}
          variant="drawer"
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col mx-auto items-center justify-evenly gap-7 px-2 lg:pl-4">
        <Hero />
        <AboutMe />
        <Projects />
        <Achievements />
        <Skills />
        <ContactMe />
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
