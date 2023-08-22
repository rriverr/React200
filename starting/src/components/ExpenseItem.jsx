import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28).toString();
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div className="">{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
