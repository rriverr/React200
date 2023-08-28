import React from "react";
import ExpenseItem from "./ExpenseItem";
import './css/Expenses.css'
import Card from "./Card";
import ExpensesFilter from "./newexpenses/ExpenseFilter";

const Expenses = (props) => {

  const expenses = props.data;

  const onFilter = (data) => {
    console.log(data);
  }

  return (
    <Card className="expenses">
    <ExpensesFilter onFilter={onFilter}/>
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
