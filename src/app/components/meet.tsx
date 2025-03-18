import React, { useState } from 'react'
import NavbarComponent from './navbar'
import { useSession} from "next-auth/react";


const MeetComponent = () => {

    const { data: session } = useSession();
    const [open, setOpen] = useState(false);
    

    const handleOpen = () => setOpen(!open);

  return (
    <>
        {/* navbar */}
        <NavbarComponent/>

        
        
          <h1 className='subheading-fontSize text-center'>Welcome, {session?.user?.name ?? "Unknown User"}</h1>
          
        
          <h1 className='heading-fontSize text-center mt-8 '>Video calls and meetings for</h1>
          <h1 className='heading-fontSize text-center'> everyone</h1>

          <p className='subheading-fontSize text-center mt-4 font-thin'>Connect, collaborate, and celebrate from </p>
          <p className='subheading-fontSize text-center font-thin'> anywhere with Google Meet</p>
          
          <div className='flex justify-center mt-8'>
            
            <button onClick={handleOpen} className='bg-primary p-2 rounded-md flex items-center gap-2 subparagraph-fontSize'>
              New Meet
            </button>

          </div>

          
          
        
      
    </>
  )
}

export default MeetComponent
