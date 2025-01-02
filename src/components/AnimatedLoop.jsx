import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { useState, useEffect } from "react";

const AnimatedLoop = () => {

const baseUrl = "https://my-api-y1yb.onrender.com";

    const[stacks, setStacks] = useState([]);

    
    const [loading, setLoading] = useState(true);

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
                setLoading(false);
            }
    
        }
    
        useEffect( ()=>{ fetchData() },[])



  return (
    <div className="relative flex p-4 select-none overflow-hidden">
      
      
      {/* Animated content */}
      <motion.div
        className="flex "
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          repeatDelay: 0,
          ease: "linear",
          times: [0, 1],
        }}
      >
        { loading === true ?   
         (<p> </p>):
        (
          stacks.map((stack) => (
          
              <SkillCard className='w-[3rem] mx-3 sm:w-[5rem] sm:mx-5' stack={stack.data} key={stack._id}/>
         
            ))
          )
        }
      </motion.div>

    
    </div>
  );
};

export default AnimatedLoop;
