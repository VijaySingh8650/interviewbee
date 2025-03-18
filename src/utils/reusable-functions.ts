import { v4 as uuidv4 } from 'uuid';

export const getDateTimeDayMonth = (date: Date) => {
  
  const time = date.toTimeString().split(" ")[0]; // 14:37:53
  const day = date.toLocaleString("en-US", { weekday: "long" }); 
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const dayNumber = date.getDate();

  return { time, day, month, year, dayNumber };

};

export const generateMeetLink =() => {
  const uniqueId = uuidv4().split('-')[0]; // Shorten UUID
  return `https://meet.google.com/${uniqueId}`;
}



export const generateTimeSlots = (selectedDate: Date | null) => {
  
  const times:{value:string, label:string}[] = [];
  const now = new Date(); 
  
  now.setSeconds(0, 0);
  
  if (!selectedDate) return times;

 
  const selectedDay = new Date(selectedDate);
  selectedDay.setHours(0, 0, 0, 0);

  const isToday = selectedDay.getTime() === new Date().setHours(0, 0, 0, 0);

  for (let hour = 8; hour <= 22; hour++) { 
    for (const minutes of [0, 15, 30, 45]) { // 15-minute intervals
      const timeSlot = new Date(selectedDay);
      timeSlot.setHours(hour, minutes, 0, 0);

      
      if (!isToday || timeSlot > now) {
        const formattedTime = timeSlot.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        times.push({ value: formattedTime, label: formattedTime });
      }
    }
  }

  return times;
};

