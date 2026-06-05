import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/hero/Hero";
import AboutMe from "@/features/about/AboutMe";
import Projects from "@/features/projects/Projects";
import Achievements from "@/features/achievements/Achievements";
import Skills from "@/features/skills/Skills";
import ContactMe from "@/features/contact/ContactMe";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto viga-regular">
      <div className="z-[1000] fixed shadow-md shadow-slate-500">
        {isSidebarOpen ? (
          <Sidebar toggleSidebar={toggleSidebar} />
        ) : (
          <button
            type="button"
            className="icon-arrow-right py-3 text-[#4e45d5] border-y-2 border-r-[1px] border-[#756eda] text-2xl font-extrabold bg-slate-50 rounded-r-md hover:bg-[#756eda] hover:text-white hover:scale-x-125 hover:rounded-r-none duration-300"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <div className="flex flex-col mx-auto items-center justify-evenly gap-7 px-2">
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
