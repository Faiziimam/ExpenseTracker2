import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./expenses.css";
export default function Expenses({ expenses }) {
  const [saveYear, setSaveYear] = useState("2022");
  const yearData = (yearDate) => {
    setSaveYear(yearDate);
  };
  console.log(saveYear);
  return (
    <Card className="expenses">
      <ExpensesFilter defaultYear={saveYear} onSaveYearData={yearData} />
      {expenses.map((items, index) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </Card>
  );
}
