import React from 'react'

const SkillCard = (props) => {
  const stack = props.stack;
  
  const className = props.className;

  const basePath = "/assets/stack/";

  return (
    <div className={`z-10 flex flex-col p-2 hover:scale-110 duration-300 ease-in ${className}`}>
        <img
            src={`${basePath}${stack.icon}`}
            alt={` Icon ${stack.name}`}
            className={``}
            loading='lazy'
        />
    </div>
  )
}

export default SkillCard
