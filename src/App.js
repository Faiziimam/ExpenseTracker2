import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses />
    </div>
  );
}
