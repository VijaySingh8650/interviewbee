import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import { Files } from "lucide-react";

const ScheduledTime = () => {
  const { time, day, month, year, dayNumber, link } = useSelector(
    (state: RootState) => state.meet
  );

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return month && year ? (
    <div className="w-[500px] shadow-meetingSchedule p-4 bg-white rounded-md text-center mt-12 m-auto">
      <h1 className="subheading-fontSize">Your meeting is scheduled</h1>
      {
        !link ? <p>Loading...</p> :
        <>
          <h1 className="subparagraph-fontSize mt-2">
            {day +
              ", " +
              dayNumber +
              " " +
              month +
              " " +
              year +
              " at " +
              time.substring(0, 5)}
          </h1>
          <div className="flex items-center justify-between mt-4 p-2 bg-gray-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
            <Files onClick={copyToClipboard} className="cursor-pointer" />
          </div>
        </>
      }
    </div>
  ) : null;
};

export default ScheduledTime;
