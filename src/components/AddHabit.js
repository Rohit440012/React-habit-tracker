import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHabit } from "../store/habitSlice";
import { getDays } from "../store/habitSlice";

//This component is reponsible for adding new habbit in habit state
const AddHabit = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habit);
  const [enteredHabit, setEnteredHabit] = useState("");
  const navigate = useNavigate();
  const addHabitHandler = (e) => {
    e.preventDefault();
    if (enteredHabit.length === 0) {
      return;
    }
    dispatch(
      addHabit({
        id: habits.length + 1,
        title: enteredHabit,
        status: getDays().reduce((a, v) => ({ ...a, [v]: "pending" }), {}),
      })
    );
    setEnteredHabit("");
    navigate("/");
  };

  return (
    <>
      <h3>Add New Habit</h3>

      <form onSubmit={addHabitHandler} className="form">
        <label htmlFor="habit-name">Habit</label>
        <input
          type="text"
          id="habitName"
          placeholder="Enter new Habit"
          value={enteredHabit}
          onChange={(e) => {
            setEnteredHabit(e.target.value);
          }}
        />
        <button>Add Habit</button>
      </form>
    </>
  );
};

export default AddHabit;
