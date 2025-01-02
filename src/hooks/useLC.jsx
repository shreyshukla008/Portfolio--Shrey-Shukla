import React, { useEffect, useState } from 'react'
import axios from 'axios';


function extractUnixDates(dataString) {
    // Match all sequences of digits (keys) that appear inside quotes followed by a colon
    const matches = dataString.match(/"(\d+)":/g);
    // Remove the surrounding quotes and colon from each match
    const unixDates = matches ? matches.map(match => match.replace(/[:"]/g, '')) : [];
    return unixDates;
}


  

const BaseURL = "https://alfa-leetcode-api.onrender.com/";
const userName = "shreyshukla0803";



const useLC = () => {

        const [loading,setLoading] = useState(false);
        const [error, setError] = useState(false);
        const [payload, setPayload] = useState({
                                                profile:{
                                                    avatar: "",
                                                    ranking: 0,
                                                },
                                                problems:{
                                                    total: 0,
                                                    easy: 0,
                                                    medium: 0,
                                                    hard: 0,
                                                },
                                                badges:{
                                                    all: [],
                                                    count: 0,
                                                },
                                                calendar: []
                                            })
        
        async function fetchData() {
    
            setLoading(true);
            
            
            try{

            const prof = await axios.get(`${BaseURL}${userName}`);
            const badges = await axios.get(`${BaseURL}${userName}/badges`);
            const solved = await axios.get(`${BaseURL}${userName}/solved`);
            const cal = await axios.get(`${BaseURL}${userName}/calendar`);

           
            setPayload( (prevData) => {
                return {
                        ...prevData, 

                            profile:{
                                ...prevData.profile,
                                avatar: prof.data.avatar,
                                ranking: prof.data.ranking,
                            },

                            badges:{
                                ...prevData.badges,
                                all: [...prevData.badges.all, badges.data.badges],
                                count: badges.data.badges.length
                            },

                            problems:{
                                ...prevData.problems,
                                total: solved.data.acSubmissionNum[0].count,
                                easy: solved.data.acSubmissionNum[1].count,
                                medium: solved.data.acSubmissionNum[2].count,
                                hard: solved.data.acSubmissionNum[3].count,
                            },

                            calendar: extractUnixDates(cal.data.submissionCalendar).map( (element) => { 
                                                            return{
                                                            date: new Date((parseInt(element,10)*1000)).toISOString().split('T')[0],
                                                            count: 1}
                                                        })

                    }});
  
             
            }catch(error){
                console.log("Error: ", error.message);
                setError(true);
            }finally {
                setLoading(false);
              }
              
            }
    
        useEffect(() => {fetchData()} ,[])

            return {loading,error,payload,fetchData};
    
        
}

export default useLC;
