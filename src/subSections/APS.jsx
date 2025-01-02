import React from 'react'
import { useState } from 'react';
import LeetCode from './LeetCode';

const APS = () => {

    const [drop, setDrop] = useState(false);
    const [lcDrop, setLcDrop] = useState(false);

  return (
    <div className='px-4 py-2 flex flex-col gap-8 text-justify'>
      
      <div className='flex justify-between gap-4 items-start'>

        <h2 className='text-lg'>Algorithm and Problem Solving</h2>
        <button className='p-1 px-2 border-2 border-slate-100 shadow-md rounded-md' onClick={ () => { setDrop(!drop) }}>
           { drop ? 
            (<i className='icon-arrow-up font-bold'></i>):
            (<i className='icon-arrow-down font-bold'></i>)
           }
        </button>

      </div>

      <div>
      Strong proficiency in analyzing, designing, and implementing efficient algorithms to solve complex problems.
      </div>

      {drop &&
        <section>

        <div className='flex justify-between border-y-2 rounded-lg mt-4 border-[#4e45d5] p-4'>
            <h3 className='text-md'>LeetCode</h3>
            <button className='p-1 px-2  ' onClick={ () => { setLcDrop(!lcDrop) }}>
            { lcDrop ? 
              (<i className='icon-arrow-up font-bold'></i>):
              (<i className='icon-arrow-down font-bold'></i>)
            }
            </button>
        </div>

        <div>{lcDrop &&
            <LeetCode />}
        </div>
        
      </section>}

    </div>
  )
}

export default APS
