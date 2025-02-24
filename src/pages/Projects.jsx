import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const Projects = () => {

  const [tag,setTag] = useState("all");
  const [loading, setLoading] = useState(false);
  const [projData, setData] = useState([]);
  const [error, setError] = useState(false);
  
  const baseUrl = 'https://my-api-y1yb.onrender.com';
  const fetchData = async () => {

    try{
      setLoading(true);
      const resp = await fetch(`${baseUrl}/api/v1/projects`);
      const result = await resp.json();
      console.log("result: ", result);
      console.log("result[0].data: ", result[0].data);
      setData(result[0].data);
      setLoading(false);
    }catch(error){
      console.log("Error: ", error);
      setError(true);
      setLoading(false);
    }
  }

  useEffect( ()=>{fetchData()}, []);

  return (

    <div className='w-full my-14 pt-14' id='ProjectSection'>
      <div className='max-w-[1200px] mx-auto'>
        <h3 className='text-3xl phone:text-5xl md:text-6xl yusei-magic-regular text-[#4e45d5] font-bold select-none'>Projects</h3>
      </div>

      <div className='bg-slate-100 rounded-lg py-7'>
          <div className='max-w-[1200px] mx-auto'>
            <div className='flex justify-evenly gap-3 my-14'>
              <button className={`w-[30%] p-2 overflow-hidden shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${tag==="all"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`} onClick={()=>{setTag("all")}}>
                All 
              </button>
              <button className={`w-[30%] p-2 overflow-hidden shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${tag==="web"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`} onClick={()=>{setTag("web")}}>
                Web-Development 
              </button>
              <button className={`w-[30%] p-2 overflow-hidden shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${tag==="dsa"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`} onClick={()=>{setTag("dsa")}}> 
                DSA 
              </button>
        
            </div>

            <div className='flex flex-wrap flex-col md:flex-row gap-12 justify-center md:items-start items-center my-10'>
                {error === true ? 
                  (<div className='h-[300px] w-[300px]'> <Error /> </div>) :
                  ( 
                  loading === true ? (<div className='w-full flex justify-center items-center p-8'> <Spinner/> </div>) :
                  (tag !== "all" ?
                    (
                      projData.filter((project) => project.data[0].tags.includes(tag)).
                      map( (project) => <ProjectCard project={project.data[0]} setTag={setTag} key={project._id} />)
                    ):
                    (
                      projData.map( (project) => <ProjectCard project={project.data[0]} setTag={setTag} key={project._id} />)
                    ))
                  )
                }
            </div>
          </div>
      </div>

    </div>
  )
}

export default Projects
