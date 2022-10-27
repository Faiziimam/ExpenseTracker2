import React, { useState } from "react";

import "./expenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  // Another way to handle States
  // const [inputValue, setInputValue] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    // Step 1
    setEnteredTitle(event.target.value);
    // Step 2
    // setInputValue({
    //   ...inputValue,
    //   enteredTitle: event.target.value
    // });
    // Step 3
    // setInputValue((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // To Handle Submit Response
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
