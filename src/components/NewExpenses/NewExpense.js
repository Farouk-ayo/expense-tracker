import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [starting, startingFtn] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData2 = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    // calling from app js file
    props.OnAddExpense(expenseData2);
    console.log(expenseData2);
    startingFtn(false);
  };

  const startingFunction = () => {
    startingFtn(true);
  };

  const stoppingFunction = () => {
    startingFtn(false);
  };
  return (
    <div className="new-expense">
      {!starting && <button onClick={startingFunction}>Add New Expense</button>}
      {starting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stoppingFunction}
        />
      )}
    </div>
  );
};

export default NewExpense;
