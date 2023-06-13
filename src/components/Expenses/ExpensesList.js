import React from 'react'

import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
  return (
    <div>
        {props.items.length === 0 && <p> No expenses found.</p>}
        {props.items.length > 0 &&  
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  )
}

export default ExpensesList