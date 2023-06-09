import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilterDate(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
   return expense.date.getFullYear().toString() === filterDate;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterDate}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 && <p> No expenses found.</p>}
        {filteredExpenses.length > 0 &&  
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        >
          {" "}
        </ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        >
          {" "}
        </ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        >
          {" "}
        </ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        >
          {" "}
        </ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
