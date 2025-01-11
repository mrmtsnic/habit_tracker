import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";

import {
  useHabitDispatchContext,
  useHabitContext,
} from "../context/HabitContext";

registerLocale("ja", ja);

const HabitTracker = () => {
  const dispatch = useHabitDispatchContext();
  const habits = useHabitContext();

  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);

  const createHabit = () => {
    dispatch({
      type: "create",
      value: value,
      date: date.toISOString().split("T")[0],
    });
    setValue("");
    setDate("");
  };
  //TODO
  // DatePickerで日付を選択できるようにする。

  return (
    <div className="App">
      <h1>習慣トラッカー</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)} // 日付選択
        dateFormat="yyyy/MM/dd" // 日付形式
        className="date-picker"
        locale="ja"
      />
      <button onClick={createHabit}>作成</button>
      <ul>
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              内容:{habit.value} Date:{habit.date}
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
