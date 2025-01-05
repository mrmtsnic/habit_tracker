import "./App.css";
import { HabitProvider } from "./context/HabitContext";

import HabitTracker from "./components/HabitTracker";

function App() {
  return (
    <HabitProvider>
      <HabitTracker />
    </HabitProvider>
  );
}

export default App;
