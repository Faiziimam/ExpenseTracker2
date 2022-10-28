import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./styles.css";

export default function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}
