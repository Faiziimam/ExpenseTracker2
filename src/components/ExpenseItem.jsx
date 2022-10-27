import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";
import Card from "./Card";
function ExpenseItem({ title, amount, date }) {
  const [state, setState] = useState("");
  const handle = () => {
    setState("Hellow Mojo !");
    // console.log("Clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{state}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button type="submit" onClick={handle}>
        Click
      </button>
    </Card>
  );
}

export default ExpenseItem;
