import React, { useEffect, useState } from 'react';
import axios from 'axios';

import blob from '../assets/blob.png';
import SkillCard from '../components/SkillCard';
import Spinner from '../components/Spinner';
import Error from '../components/Error';



const Skills = () => {

    const baseUrl = "https://my-api-y1yb.onrender.com";

    const [skillType, setSkillType] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const[stacks, setStacks] = useState([]);

    const  fetchData = async () =>{

        setLoading(true);
    
        try{
            const result = await fetch(`${baseUrl}/api/v1/stacks`);
            const res = await result.json();
            setStacks(res);
            setLoading(false);
        }
        catch(error){
            console.log("Error: ", error.message);
            setError(true);
            setLoading(false);
        }

    }

    useEffect( ()=>{ fetchData() },[])

  return (

    <div className='mt-14 flex flex-col lg:flex-row lg:justify-between lg:items-end lg:gap-8 gap-4 max-w-[1200px] pt-14' id='SkillsSection'>
        <div className='w-[95%] lg:w-[50%]'>

            <h3 className='text-3xl phone:text-5xl md:text-6xl yusei-magic-regular text-[#4e45d5] select-none text-left mb-8'>
                <p>Me and</p>
                <p>My Tech Stack</p>
            </h3>

            <div className='text-md md:text-lg flex flex-col gap-2 text-justify'>
                <p>
                    As a tech enthusiast, I thrive on turning ideas into impactful solutions. My journey has been shaped by a passion for learning and exploration, enabling me to tackle challenges across diverse domains. From crafting intuitive interfaces to solving complex backend problems, I enjoy blending creativity with technical expertise.
                </p>

                <p>
                    My tech stack is more than just a set of tools—it's a way to bring ideas to life. With each project, I aim to learn, innovate, and deliver solutions that make a difference. For me, technology is not just a skill but a journey of endless possibilities.
                </p> 

                <p>
                    Feel free to explore the technologies I work with in more detail...
                </p>
            </div>

        </div>

        <div className='w-[90%] text-xs mx-auto lg:w-[45%] bg-slate-50 rounded-lg  md:text-lg '>

            <div className='bg-slate-50 flex flex-wrap justify-between mx-auto p-2 gap-2 rounded-md my-2 text-s'>
                    <div className={`w-[22%] hover:cursor-pointer p-2 shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${skillType==="all"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`}>
                        <button className='w-full overflow-hidden' onClick={ () => {setSkillType("all")}}> 
                            All 
                        </button>
                    </div>
                    <div  className={`w-[22%] hover:cursor-pointer p-2 shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${skillType==="two"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`}>
                        <button  className='w-full overflow-hidden' onClick={ () => {setSkillType("front")}}> Front-End </button>
                    </div>
                    <div  className={`w-[22%] hover:cursor-pointer p-2 shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${skillType==="ten"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`}>
                        <button  className='w-full overflow-hidden' onClick={ () => {setSkillType("back")}}> Back-End </button>
                    </div>
                    <div  className={`w-[22%] hover:cursor-pointer p-2 shadow-md border-2 rounded-md hover:bg-[#665de8] hover:text-white hover:scale-105 hover:border-slate-600 duration-200 ${skillType==="one"?('bg-[#665de8] text-white border-slate-500 shadow-[#4e45d5]'):('text-[#4e45d5]  border-[#4e45d5] shadow-slate-400')}`}>
                        <button  className='w-full overflow-hidden' onClick={ () => {setSkillType("db")}}> DB </button>
                    </div>
            </div>

            <div className='relative flex flex-wrap bg-slate-50 mx-auto justify-evenly items-center pt-4 px-4 rounded-md min-h-[280px] lg:h-[320px]'>
                <div className='blog absolute w-[50%] top-[15%] left-[25%] animate-blob'>
                    <img className='w-[80%]' src={blob} alt="" />
                </div>
                { 
                (loading === true ?
                    ( <div className='w-full flex justify-center items-center p-8 z-40'> <Spinner/> </div>) :

                    error === true ? 
                    (<div className='h-[300px] w-[300px] z-40'> <Error /> </div>) :
                
                    (
                        stacks.filter(stack => skillType !== "all" ? (stack.data.tag === skillType) : (true)).
                        map( (stack, index) => {
                            return <SkillCard className='w-[15%]' stack={stack.data} key={stack._id} />
                        })
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills
