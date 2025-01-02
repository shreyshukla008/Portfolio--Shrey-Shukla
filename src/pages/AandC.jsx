import React from 'react'
import APS from '../subSections/APS'
import OOAD from '../subSections/OOAD'
import CyberWeb from '../subSections/CyberWeb'


const AandC = () => {
  return (
    <div className='w-full mt-10 pt-14' id='AandCsection'>

        <div className='mx-auto max-w-[1200px]'>
            <h2 className='text-3xl phone:text-5xl md:text-6xl yusei-magic-regular text-[#4e45d5] font-bold select-none'>
                <p>Achivements </p> 
                <p>& Certification</p>
            </h2>
        </div>

        <div className='bg-slate-100 rounded-lg py-8' >
            <div className='mx-auto max-w-[1200px] flex flex-col   gap-8 p-4 justify-between rounded-md'>
                

                <div className=' bg-slate-50 rounded-md p-2'>
                    <APS />
                </div>

                <div className=' bg-slate-50 rounded-md p-2'>
                    <OOAD />
                </div>

                <div className=' bg-slate-50 rounded-md p-2'>
                    <CyberWeb />
                </div>
            </div>

            <div>
                    
            </div>
        </div>
        
    </div>
  )
}

export default AandC
