import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import CustomInput from "./CustomInput";
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
  const [error, setError] = useState({ value: false, date: false });

  const createHabit = () => {
    setError({ value: false, date: false });

    if (value === "") {
      setError((prev) => ({ ...prev, value: true }));
      return;
    } else if (date === null) {
      setError((prev) => ({ ...prev, date: true }));
      return;
    }

    dispatch({
      type: "create",
      value: value,
      date: date.toISOString().split("T")[0],
    });
    setValue("");
    setDate(null);
  };

  //TODO
  // DatePickerにアイコンをクリックしたらピッカーが出るようにしたい

  return (
    <div className="App">
      <h1>習慣トラッカー</h1>
      <div>
        内容:
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        {error.value && <p className="error-text">内容を入力してください</p>}
      </div>
      <div>
        日付:
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)} // 日付選択
          dateFormat="yyyy/MM/dd" // 日付形式
          className="date-picker"
          locale="ja"
          customInput={<CustomInput error={error} />}
        />
        {error.date && <p className="error-text">日付を入力してください</p>}
      </div>
      <button onClick={createHabit}>作成</button>
      <ul>
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              {habit.value} {habit.date}
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
