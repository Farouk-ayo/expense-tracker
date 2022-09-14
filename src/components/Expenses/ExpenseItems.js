// import React, { useState } from "react";
import React from "react";

import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log(props.title);
  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItems;
