import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habitSlice";

//store for Habit-slice
export const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
});
