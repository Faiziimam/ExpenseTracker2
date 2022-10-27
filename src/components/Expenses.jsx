import Card from "./Card";
import expenses from "./dummyData";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
export default function Expenses() {
  return (
    <Card className="expenses">
      {expenses.map((items, index) => (
        <ExpenseItem
          key={index}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </Card>
  );
}
