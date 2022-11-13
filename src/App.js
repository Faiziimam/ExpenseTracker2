import { useState } from "react";
import expenses from "./components/dummyData";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./styles.css";

export default function App() {
  const [expenseData, setExpneseData] = useState(expenses);
  const addExpenseHandler = (expensesData) => {
    setExpneseData((prevExpenses) => {
      return [expensesData, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseData} />
    </div>
  );
}
