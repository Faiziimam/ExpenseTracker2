import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* This is a bottom up approach to send data from child component to parent component */}
      <ExpenseForm onSaveExpenseData={saveDataHandler} />
    </div>
  );
};
export default NewExpense;
