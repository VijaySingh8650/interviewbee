import React, { useEffect, useMemo, useState } from "react";
import ModalComponent from "./modal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select, { SingleValue } from "react-select";
import { generateTimeSlots } from "@/utils/reusable-functions";

type TypeOfPageProps = {
  open: boolean;
  handleOpen: () => void;
  scheduleTheMeet: (schedule: Date) => void;
};

const FutureScheduleModal: React.FC<TypeOfPageProps> = ({
  open,
  handleOpen,
  scheduleTheMeet
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");
  const timeSlots = useMemo(() => {
    return generateTimeSlots(date);
  }, [date]);

  useEffect(() => {
    // Reset state when modal closes
    if (open) {
      setDate(null);
      setTime("");
    }
  }, [open]);

  return (
    <ModalComponent open={open} onOpenChange={handleOpen}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md text-center">
        {/* Calendar for Date Selection */}
        <Calendar
          onChange={(value) => value && setDate(value as Date)}
          value={date}
          minDate={new Date()} // Only allow future dates
        />

        {/* Dropdown for Time Selection */}
        <div className="mt-4">
          <Select
            options={timeSlots}
            onChange={(
              e: SingleValue<{
                value: string;
                label: string;
              }>
            ) => {
                setTime(e?.value || "");

                scheduleTheMeet(new Date(date?.toString()?.substring(0, 15)+" "+e?.value))
                
            }}
            placeholder="Select the Time"
            menuPlacement="top"
          />
        </div>

        <p className="mt-2 font-semibold">
          {` Selected Date & Time: ${ date ? date?.toDateString() : ""} at ${ time ?? ""}`}
        </p>
        
      </div>
    </ModalComponent>
  );
};

export default FutureScheduleModal;
