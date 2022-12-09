import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const [StartclickHandler, setClickHandler] = useState(false);

  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setClickHandler(false);
  };
  const StartHandleClick = () => {
    setClickHandler(true);
  };
  const StopHandleClick = () => {
    setClickHandler(false);
  };
  return (
    <div className="new-expense">
      {/* This is a bottom up approach to send data from child component to parent component */}
      {!StartclickHandler && (
        <button type="submit" onClick={StartHandleClick}>
          Add Expense
        </button>
      )}
      {StartclickHandler && (
        <ExpenseForm
          onSaveExpenseData={saveDataHandler}
          onCancel={StopHandleClick}
        />
      )}
    </div>
  );
};
export default NewExpense;
