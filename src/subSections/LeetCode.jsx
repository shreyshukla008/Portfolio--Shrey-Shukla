import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LCcard from '../components/LCcard';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

import useLC from '../hooks/useLC'


function getMaxConsecutiveStreak(data) {

  const sortedData = data.sort((a, b) => new Date(a.date) - new Date(b.date));

  let maxStreak = 0;
  let currentStreak = 0;

  for (let i = 0; i < sortedData.length; i++) {
    if (i === 0 || new Date(sortedData[i].date) - new Date(sortedData[i - 1].date) === 24 * 60 * 60 * 1000) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 1;
    }
  }

  maxStreak = Math.max(maxStreak, currentStreak);

  return maxStreak;
}


const LeetCode = () => {

    const BaseURL = "https://alfa-leetcode-api.onrender.com/";
    const userName = "shreyshukla0803";

    const startDate = Math.floor(Date.parse('2024-07-20') );
    const endDate = Date.now();

    const {loading, error, payload, fetchData} = useLC();

    const maxStreak = getMaxConsecutiveStreak(payload.calendar);


  return (

    <div>
      { 
        loading === true ?
        (<div className='w-full flex justify-center items-center p-8'> <Spinner/> </div>):
      
          error === true ?
          (<div className='h-[300px] w-[300px] mx-auto'> <Error /> </div>):
          (  
          <div>
              <div className='flex flex-col font-light p-4 gap-6'>

                <h4 className='text-xl'>Profile and Milestones</h4>
                
                <LCcard 
                profile={payload.profile} problems={payload.problems} badges={payload.badges} maxStreak={`${maxStreak}`}
                />

              </div>

              <div className='flex flex-col items-center overflow-hidden  font-light p-4 '>
                
                <div className='flex flex-col gap-4 h-full'>
                  <h3 className='text-xl'>Consistency in Action</h3>
                  <p className='text-justify' >
                    This heatmap shows my consistent daily problem-solving on LeetCode, reflecting steady progress and dedication. Each block represents a day of problem-solving, illustrating my commitment to learning and growth.
                  </p>
                  <p>
                  With a maximum streak of {maxStreak} consecutive days, it highlights my focus and determination to continuously improve.
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center'>

                      <svg className='scale-50 phone:scale-100 '>
                        <CalendarHeatmap
                            startDate={startDate}
                            endDate={endDate}
                            gutterSize={2}
                            values={payload.calendar}
                        />
                      </svg>

                    <p className="text-xs font-light">From- 20/7/2024 to {`${(new Date()).getDate()}/${(new Date()).getMonth() + 1}/${(new Date()).getFullYear()}`}</p>

                </div>

              </div>
            </div>
        )
        }
      
    </div>
  )
}

export default LeetCode
