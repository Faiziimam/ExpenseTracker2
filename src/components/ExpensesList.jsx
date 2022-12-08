import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filterData }) => {
  if (filterData.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No Expense Found, Add One </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {filterData.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
