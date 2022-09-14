import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [stateYear, setYear] = useState("2021");

  const filterYear = (selectedYear) => {
    // console.log("expense.js");
    // console.log(selectedYear);
    setYear(selectedYear);
  };

  const filterYearExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === stateYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelected={stateYear} onYearChanged={filterYear} />
        <ExpensesChart expenses={filterYearExpenses} />
        <ExpensesList items={filterYearExpenses} />
        {/* <ExpenseItems
          title={props.expenseItems[0].title}
          amount={props.expenseItems[0].amount}
          date={props.expenseItems[0].date}
        ></ExpenseItems>
        <ExpenseItems
          title={props.expenseItems[1].title}
          amount={props.expenseItems[1].amount}
          date={props.expenseItems[1].date} 
        ></ExpenseItems>
        <ExpenseItems
          title={props.expenseItems[2].title}
          amount={props.expenseItems[2].amount}
          date={props.expenseItems[2].date}
        ></ExpenseItems>
        <ExpenseItems
          title={props.expenseItems[3].title}
          amount={props.expenseItems[3].amount}
          date={props.expenseItems[3].date}
        ></ExpenseItems> */}
      </Card>
    </div>
  );
};

export default Expenses;
