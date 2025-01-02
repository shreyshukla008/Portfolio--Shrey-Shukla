import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, Legend, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import AnimatedLoop from '../components/AnimatedLoop'


const AboutMe = () => {

    const data = [
        {
          "subject": "Problem Solving",
          "A": 90,
          "fullMark": 100
        },
        {
          "subject": "BackEnd",
          "A": 80,
          "fullMark": 100
        },
        {
          "subject": "Programming",
          "A": 86,
          "fullMark": 100
        },
        {
          "subject": "FrontEnd",
          "A": 99,
          "fullMark": 100
        },
        {
          "subject": "OOPs",
          "A": 85,
          "fullMark": 100
        },
      ]
    
  return (
    <div className='max-w-[1200px] pt-16' id='AboutMeSection'>
      
      <h3 className='text-3xl phone:text-5xl md:text-6xl yusei-magic-regular select-none font-bold text-[#4e45d5]'>
        About Me
      </h3>

      <div className='flex flex-col justify-center items-center md:flex-row gap-10 mt-5 z-10'>
            

            <div className=' flex bg-slate-100 flex-col gap-4 justify-center items-center lg:mt-0  md:flex-row text-slate-600 w-[90%] rounded-lg shadow-lg '>

                <div className='py-6 px-4 flex flex-col justify-evenly gap-4 items-center'>   
                    <p className='text-s phone:text-[0.9rem] text-justify viga-regular'>
                    A motivated and detail-oriented software engineering student currently pursuing a Bachelor of Technology in Computer Science
 and Engineering. With expertise in the MERN stack, OOP, and strong problem-solving skills.
                    </p>
                    
                    <button className='flex group w-52 p-2 justify-center flex-wrap gap-3 px-3 rounded-md bg-slate-50 border-2 border-[#4e45d5] hover:border-b-2 hover:border-slate-600 hover:text-slate-50 hover:bg-[#4e45d5] shadow-md shadow-slate-400 hover:ease-in duration-200 text-black'>
                        DownloadCV 
                        <i className='fa-solid fa-download group-hover:animate-bounce'></i>
                    </button>
                    

                </div>

                <div className='w-full flex flex-col justify-center items-center viga-regular'>
                  
                  <div className='w-full aspect-square max-w-[200px] z-10'>
                    <ResponsiveContainer>
                        <RadarChart outerRadius={60} width={320} height={200} data={data}>
                              <PolarGrid />
                              <PolarAngleAxis fontSize={10} dataKey="subject" />
                              <Radar name="Skills" dataKey="A" stroke="#8884d8" fill="#43c343" fillOpacity={0.6} />
                              
                        </RadarChart>
                    </ResponsiveContainer>
                  </div>
                    

                    <p className='text-lg'>Skills</p>

                </div>

            </div>

      </div>

      <div className='max-w-[1200px] w-screen my-6 overflow-hidden'>
          <AnimatedLoop />
      </div>


    </div>
  )
}

export default AboutMe
