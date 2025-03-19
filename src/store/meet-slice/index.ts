import { createSlice } from '@reduxjs/toolkit';

export type TyoeOfInitialState =  {
    time: string;
    day: string;
    month: string;
    year: string;
    dayNumber: string;
    link:string;
  }
  
  const initialState: TyoeOfInitialState = {
    time:"",
    day:"",
    month:"",
    year:"",
    dayNumber:"",
    link: "",
  };

  const meetSlice = createSlice({
    name: "meet",
    initialState,
    reducers:{

        updateMeet:(state, action) => {
            return {
                ...state,
                time: action.payload.time,
                day: action.payload.day,
                month: action.payload.month,
                year: action.payload.year,
                dayNumber: action.payload.dayNumber,
                link: action.payload.link
              };
            }
     }

  });
 

  export const { updateMeet } = meetSlice.actions;
  export default meetSlice.reducer;