import { createContext, useReducer, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const HabitContext = createContext();
const HabitDispatchContext = createContext();

const reducer = (habits, action) => {
  // debugger;
  switch (action.type) {
    case "create":
      const newHabit = {
        value: action.value,
        id: uuidv4(),
        date: action.date,
      };
      const newHabits = [...habits, newHabit];

      return newHabits;
    case "delete":
      return habits.filter((habit) => habit.id !== action.payload);
    case "update":
    default:
      throw new Error("invalid type");
  }
};

const HabitProvider = ({ children }) => {
  const [habits, dispatch] = useReducer(reducer, []);
  return (
    <HabitContext.Provider value={habits}>
      <HabitDispatchContext.Provider value={dispatch}>
        {children}
      </HabitDispatchContext.Provider>
    </HabitContext.Provider>
  );
};

const useHabitContext = () => useContext(HabitContext);
const useHabitDispatchContext = () => useContext(HabitDispatchContext);

export { HabitProvider, useHabitContext, useHabitDispatchContext };
