import React from 'react'
import SocialCard from './SocialCard';

const Socials = () => {
    
    const arr = [{name: "Linkedin", icon: "fa-brands fa-linkedin", ref: "https://www.linkedin.com/in/shreyshukla008/"},
                 {name: "GitHub", icon: "fa-brands fa-github scale-150", ref: "https://github.com/shreyshukla008"},
                 {name: "Gamil", icon: "fa-regular fa-envelope", ref: "mailto:shreyshukla008@gmail.com"},
                 {name: "Portfolio", icon: "icon-link", ref: "#"}
                ];

  return (

    <div className='flex wrap gap-6 phone:gap-3 sm:gap-7 justify-start items-center w-full mt-4' >

        {
            arr.map( (social,index) => {
                return <SocialCard social={social} key={index} />
            })
        }
        
    </div>
  )
}

export default Socials
