import { useState } from "react";
import {
  useHabitDispatchContext,
  useHabitContext,
} from "../context/HabitContext";

const HabitTracker = () => {
  const dispatch = useHabitDispatchContext();
  const habits = useHabitContext();

  const [value, setValue] = useState("");

  const createHabit = () => {
    dispatch({ type: "create", value: value });
    setValue("");
  };

  return (
    <div className="App">
      <h1>習慣トラッカー</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button onClick={createHabit}>作成</button>
      <ul>
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              内容:{habit.value} ID:{habit.id}
              <button
                onClick={() => dispatch({ type: "delete", payload: habit.id })}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HabitTracker;
