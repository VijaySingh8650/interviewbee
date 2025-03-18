import { RootState } from '@/store';
import { generateMeetLink } from '@/utils/reusable-functions';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Files } from 'lucide-react';

const ScheduledTime = () => {

  const {time, day, month, year, dayNumber} = useSelector((state:RootState) => state.meet);
  const [meetLink, setMeetLink] = useState<string>("");

  useEffect(()=>{
    if (time && year && day && month && year && dayNumber) {

        setMeetLink(generateMeetLink());
    }
  },[time, year, day, month, dayNumber])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(meetLink);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return ((month && year) ?
    <div className='w-[500px] shadow-meetingSchedule p-4 bg-white rounded-md text-center mt-12 m-auto'>

        <h1 className='subheading-fontSize'>Your meeting is scheduled</h1>
        <h1 className='subparagraph-fontSize mt-2'>{day+", "+dayNumber+" "+month+" "+year+" at "+ time.substring(0, 5)}</h1>
        <div className='flex items-center justify-between mt-4 p-2 bg-gray-300'>
          <span>{meetLink}</span>
          <Files  onClick={copyToClipboard} className='cursor-pointer'/>
        </div>

      
    </div> : null
  )
}

export default ScheduledTime
