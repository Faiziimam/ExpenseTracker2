import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import Card from "./Card";
function ExpenseItem({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{amount}</div>
      </div>
      <button type="submit">Click</button>
    </Card>
  );
}

export default ExpenseItem;
