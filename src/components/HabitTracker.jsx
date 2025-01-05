import { useState } from "react";
import {
  useHabitDispatchContext,
  useHabitContext,
} from "../context/HabitContext";

const HabitTracker = () => {
  const dispatch = useHabitDispatchContext();
  const habits = useHabitContext();

  const [value, setValue] = useState("");
  return (
    <div className="App">
      <h1>習慣トラッカー</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => dispatch({ type: "create", value: value })}>
        作成
      </button>
      <ul>
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              内容:{habit.value} ID:{habit.id} Status:{habit.status}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HabitTracker;
