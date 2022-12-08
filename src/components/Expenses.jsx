import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./expenses.css";
export default function Expenses({ expenses }) {
  const [saveYear, setSaveYear] = useState("2022");
  const yearData = (yearDate) => {
    setSaveYear(yearDate);
  };
  // console.log(saveYear);
  // This below array contains values according to the filter date. Here selected Year is being compared with the Existing card year
  const fillteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == saveYear;
  });
  console.log(fillteredExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter defaultYear={saveYear} onSaveYearData={yearData} />
      <ExpensesList filterData={fillteredExpenses} />
    </Card>
  );
}
