import { createSlice } from "@reduxjs/toolkit";
//Redux-toolkit have been used as it is recommended by official documents

//Function to get todays date and previous six days
export const getDays = () => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const t = new Date();
    let p = new Date(t.setDate(t.getDate() - i));
    let q = p.toLocaleString("default", { day: "numeric", month: "short" });
    days.push(q);
  }
  return days;
};

//Boiler plate code for redux-toolkit
const initialState = [
  {
    id: 1,
    title: "Going to gym",
    status: getDays().reduce((a, v) => ({ ...a, [v]: "pending" }), {}),
  },
  {
    id: 2,
    title: "Reading book",
    status: getDays().reduce((a, v) => ({ ...a, [v]: "pending" }), {}),
  },
  {
    id: 3,
    title: "Learn React",
    status: getDays().reduce((a, v) => ({ ...a, [v]: "pending" }), {}),
  },
];

export const habitSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.forEach((s) => {
        if (s.id === action.payload.id) {
          if (s.status[action.payload.key] === "done") {
            s.status[action.payload.key] = "not-done";
            return;
          }
          if (s.status[action.payload.key] === "not-done") {
            s.status[action.payload.key] = "pending";
            return;
          }
          if (s.status[action.payload.key] === "pending") {
            s.status[action.payload.key] = "done";
            return;
          }
        }
      });
    },

    addHabit: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { changeStatus, addHabit } = habitSlice.actions;

export default habitSlice.reducer;
