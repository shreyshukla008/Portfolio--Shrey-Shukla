import React from 'react'

const Footer = () => {

  return (
    <div className='w-screen items-center bg-[#4e45d5] shadow-xl shadow-slate-800 mt-0 lg:px-4'> 
        
        <div className='mx-auto flex justify-between  py-6 px-2 '>

            <div className='relative text:lg sm:text-2xl md:text-4xl select-none text-slate-200' >
              <p className='absolute -bottom-2 left-0'>
              @ShreyShukla008
              </p>
            </div>

            <div className='flex gap-1 text-slate-50 text-xs sm:text-lg md:text-xl lg:text-2xl sm:gap-2'>

              <a href='https://github.com/shreyshukla008'
              className='flex flex-col items-center justify-center group hover:scale-105 hover:text-white duration-200 cursor-pointer'
              target="_blank" rel="noopener noreferrer">
                <i className='icon-social-github'></i>
                <p className='text-xs opacity-0 group-hover:opacity-100'>GitHub</p>
              </a>

              |

              <a href='https://www.linkedin.com/in/shreyshukla008/'
              className='flex flex-col items-center justify-center group hover:scale-105 hover:text-white duration-200 cursor-pointer'
              target="_blank" rel="noopener noreferrer">
                <i className='icon-social-linkedin'></i>
                <p className='text-xs opacity-0 group-hover:opacity-100'>LinkedIn</p>
              </a>

              |

              <a href='mailto:shreyshukla008@gmail.com'
              className='flex flex-col items-center justify-center group hover:scale-105 hover:text-white duration-200 cursor-pointer'
              target="_blank" rel="noopener noreferrer">
                <i className='icon-envelope'></i>
                <p className='text-xs opacity-0 group-hover:opacity-100'>Gmail</p>
              </a>

              |

              <a href='#'
              className='flex flex-col items-center justify-center group hover:scale-105 hover:text-white duration-200 cursor-pointer'
              target="_blank" rel="noopener noreferrer">
                <i className='icon-link'></i>
                <p className='text-xs opacity-0 group-hover:opacity-100'>WebSite</p>
              </a>
              
            </div>


        </div>

    </div>
  )
}

export default Footer
