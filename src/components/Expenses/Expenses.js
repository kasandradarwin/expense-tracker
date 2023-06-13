import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList"

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterDate(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
   return expense.date.getFullYear().toString() === filterDate;
  })

  return (
   <Card className="expenses">
   <ExpensesFilter
     selected={filterDate}
     onChangeFilter={filterChangeHandler}
   />
   <ExpensesList items={filteredExpenses} />
   </Card>
  );
};

export default Expenses;


