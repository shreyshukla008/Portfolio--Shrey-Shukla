import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import './App.css'

import Sidebar from './components/Sidebar';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills'
import AandC from './pages/AandC';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';



function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className='h-screen overflow-x-hidden overflow-y-auto viga-regular '>
      
      <div className=''>

        <div className='z-[1000] fixed shadow-md shadow-slate-500'>
          {isSidebarOpen ? (
          <div>
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
        ) :
        (
            <button className='icon-arrow-right py-3 text-[#4e45d5] border-y-2 border-r-[1px] border-[#756eda] text-2xl font-extrabold bg-slate-50 rounded-r-md hover:bg-[#756eda] hover:text-white hover:scale-x-125  hover:rounded-r-none duration-300'
              onClick={toggleSidebar}>
            </button>
        )
        }

        </div>
        
        <div >
          <div className='flex flex-col mx-auto items-center justify-evenly gap-7 px-2'>
            <Hero />
            <AboutMe />
            <Projects />
            <AandC />
            <Skills />
            <ContactMe />
          </div>
            <Footer />
        </div>

      </div>

        <Toaster />

    </div>
  )
}

export default App
