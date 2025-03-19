import React, { useState } from "react";
import NavbarComponent from "./navbar";
import { useSession } from "next-auth/react";
import { getDateTimeDayMonth } from "@/utils/reusable-functions";
import { useDispatch } from "react-redux";
import { updateMeet } from "@/store/meet-slice";
import ScheduledTime from "./scheduled-time";
import AvailableMeets from "./meetings-modal/available-meets";
import FutureScheduleModal from "./meetings-modal/future-schedule-modal";
import { createGoogleMeet } from "@/utils/create-meet";


const MeetComponent = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [futureOpen, setFutureOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(!open);

  const handleFutureModalOpen = () => {
    if(open){

      handleOpen();

    }
    
    setFutureOpen(!futureOpen);
  };

  const scheduleTheMeet = async(schedule: Date) => {
    

    const { time, day, month, year, dayNumber } = getDateTimeDayMonth(schedule);
   
    if(open){

    handleOpen();

   }

   if(futureOpen){
    handleFutureModalOpen();
   }

   const link: string  = await createGoogleMeet(schedule.toISOString(), session?.accessToken as string);
  
   
    dispatch(updateMeet({ time, day, month, year, dayNumber, link })); //updating the redux store with the schedule data
  };



  return (
    <>
      {/* navbar */}
      <NavbarComponent />
      <h1 className="subheading-fontSize text-center">
        Hello, {session?.user?.name ?? "Unknown User"}
      </h1>

      <h1 className="heading-fontSize text-center mt-8 ">
        Video calls and meetings for
      </h1>
      <h1 className="heading-fontSize text-center"> everyone</h1>

      <p className="subheading-fontSize text-center mt-4 font-thin">
        Connect, collaborate, and celebrate from{" "}
      </p>
      <p className="subheading-fontSize text-center font-thin">
        {" "}
        anywhere with Google Meet
      </p>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleOpen}
          className="bg-primary p-2 rounded-md flex items-center gap-2 subparagraph-fontSize"
        >
          New Meet
        </button>
      </div>

      {/* options for meet */}
      <AvailableMeets
        open={open}
        handleOpen={handleOpen}
        scheduleTheMeet={scheduleTheMeet}
        handleFutureModalOpen={handleFutureModalOpen}
      />

      {/* future meetings */}
      <FutureScheduleModal
        open={futureOpen}
        handleOpen={handleFutureModalOpen}
        scheduleTheMeet = {scheduleTheMeet}
      />

  

      {/* Scheduled-meeting */}
      <ScheduledTime />
    </>
  );
};

export default MeetComponent;
