import { configureStore } from '@reduxjs/toolkit';
import meetReducer from "./meet-slice";


const store = configureStore({
  reducer: {
    meet: meetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;