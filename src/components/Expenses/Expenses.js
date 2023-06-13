import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

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
   <ExpensesChart expenses={filteredExpenses} />
   <ExpensesList items={filteredExpenses} />
   </Card>
  );
};

export default Expenses;


