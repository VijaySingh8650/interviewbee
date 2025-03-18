import React from 'react'
import NavbarComponent from './navbar'
import { useSession} from "next-auth/react";

const MeetComponent = () => {

    const { data: session } = useSession();
    
  return (
    <>
        {/* navbar */}
        <NavbarComponent/>

        {/* meet component */}
        <div>
          <h1 className='subheading-fontSize text-center'>Welcome, {session?.user?.name ?? "Unknown User"}</h1>
          
        
          <h1 className='heading-fontSize text-center mt-8 '>Video calls and meetings for</h1>
          <h1 className='heading-fontSize text-center'> everyone</h1>

          <p className='subheading-fontSize text-center mt-4 font-thin'>Connect, collaborate, and celebrate from </p>
          <p className='subheading-fontSize text-center font-thin'> anywhere with Google Meet</p>
          
          <div className='flex justify-center mt-8'>
            
            <button className='bg-primary p-2 rounded-md flex items-center gap-2'>
              New Meet
            </button>

          </div>
          
        </div>
      
    </>
  )
}

export default MeetComponent
