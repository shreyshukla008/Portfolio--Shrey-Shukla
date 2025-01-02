import React from 'react'

const Sidebar = ({toggleSidebar}) => {

  return (

    <aside className='flex top-0 gap-10 w-screen bg-[#4e45d5] justify-between items-center pr-6'>
        
        <div>
            <button onClick={toggleSidebar}>
                <div className='icon-arrow-left py-3 text-slate-50 text-3xl font-extrabold shadow-md shadow-slate-600 border-r-2 border-slate-300 rounded-r-md'></div>
            </button>
        </div>
        
        <nav >
            <div>
                <ul className='flex justify-evenly gap-7 text-lg phone:text-2xl text-slate-50 '>
                    
                    <li className='flex flex-col justify-center group'>
                        <a href="#HeroSection">
                            <i className='icon-home group-hover:text-white'></i>
                        </a>

                        <div className='w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white'>
                        </div>

                    </li>

                    <li className='flex flex-col justify-center group'>
                        <a href="#AboutMeSection">
                        <i className='icon-info group-hover:text-white'></i>
                        </a>

                        <div className='w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white'>
                        </div>

                    </li>

                    <li className='flex flex-col justify-center group'>
                        <a href="#ProjectSection">
                        <i className='icon-calculator group-hover:text-white'></i>
                        </a>

                        <div className='w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white'>
                        </div>

                    </li>

                    <li className='flex flex-col justify-center group'>
                        <a href="#AandCsection">
                        <i className='icon-badge group-hover:text-white'></i>
                        </a>

                        <div className='w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white'>
                        </div>

                    </li>

                    <li className='flex flex-col justify-center group'>
                        <a href="#SkillsSection">
                        <i className='icon-wrench group-hover:text-white'></i>
                        </a>

                        <div className='w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white'>
                        </div>

                    </li>

                    <li className='flex flex-col justify-center group'>
                        <a href="#ContactMeSection">
                        <i className='icon-speech group-hover:text-white'></i>
                        </a>

                        <div className='w-full rounded-xl h-1 bg-slate-400 group-hover:bg-white'>
                        </div>

                    </li>

                </ul>
            </div>
        </nav>

    </aside>
  )
}

export default Sidebar
