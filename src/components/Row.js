import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../store/habitSlice";

//Each in table is represented by Row component
const Row = () => {
  const dispatch = useDispatch();

  const habits = useSelector((state) => state.habit);

  let color;

  return (
    <div className="container">
      <div className="row">
        {habits.map((habit) => {
          return (
            <div key={habit.id}>
              <h4>
                {habit.id}. {habit.title}
              </h4>
              <div style={{ display: "flex" }} className="boxes">
                {Object.entries(habit.status).map(([key, value]) => {
                  if (value === "pending") {
                    color = "gray";
                  }
                  if (value === "done") {
                    color = "green";
                  }
                  if (value === "not-done") {
                    color = "red";
                  }
                  return (
                    <div
                      className="box"
                      key={key}
                      style={{ backgroundColor: `${color}` }}
                      onClick={() => {
                        dispatch(changeStatus({ id: habit.id, key }));
                      }}
                    >
                      {key}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
