import React from 'react'
import { useState } from 'react';

const OOAD = () => {

  const [drop, setDrop] = useState(false);

return (
  
  <div className='px-4 py-2 flex flex-col gap-8 text-justify'>
    
    <div className='flex justify-between gap-4 items-start'>

      <h2 className='text-lg'>Object Oriented Analysis And Design</h2>
      <button className='p-1 px-2 border-2 border-slate-100 shadow-md rounded-md' onClick={ () => { setDrop(!drop) }}>
         { drop ? 
          (<i className='icon-arrow-up font-bold'></i>):
          (<i className='icon-arrow-down font-bold'></i>)
         }
      </button>

    </div>


    <div>
    A deep dive into object-oriented methodologies for building efficient and scalable software systems.
    </div>

    {drop &&
      <section>

        <ul className='flex flex-col gap-4'>
          <li>
          <span className='font-bold'>Institution:</span> Jaypee Institute of Information and Technology
          </li>

          <li>
          <span className='font-bold'>Grade:</span> A
          </li>

          <li className='flex flex-col gap-2'>

            <p>
            Successfully completed an advanced course in Object-Oriented Analysis and Design (OOAD), earning a Grade A. This course provided a comprehensive understanding of object-oriented principles and design patterns.
            </p>

            <ul className='flex flex-col gap-2'>
              <li>
                <span className='font-bold'>Core Concepts:</span> Focused on analyzing and designing software solutions using object-oriented techniques such as inheritance, polymorphism, and encapsulation.
              </li>

              <li>
                <span className='font-bold'>System Design:</span> Emphasized the use of UML for system modeling and explored various design patterns to address common software design challenges.

              </li>

              <li>
                <span className='font-bold'>Project Work:</span> Applied these principles in practical projects, creating scalable, maintainable, and efficient software systems that met real-world business requirements.
              </li>
            </ul>
            
          </li>
        </ul>

    </section>}

  </div>
)
}

export default OOAD
