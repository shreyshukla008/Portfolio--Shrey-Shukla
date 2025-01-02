import React from 'react'


const SocialCard = (props) => {
  
  return(
    <div className='bg-[#756eda] flex flex-col items-center justify-center w-10 h-10 shadow-md shadow-gray-300 rounded-lg hover:scale-110 hover:bg-[#4a4681] ease-in-out duration-300'>
        <a className='flex flex-col justify-between items-center p-2' 
          href={props.social.ref} target="_blank" 
          rel="noopener noreferrer">
            <i className={`${props.social.icon} text-[12px] text-white text-xl scale-110  `} > </i>
        </a>
    </div>
  )

}

export default SocialCard;


