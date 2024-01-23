import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formState, setFormState] = useState("hidden");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setFormState("hidden");
  };

  const addNewHandler = () => {
    setFormState("shown");
  };
  const cancelClickHandler = () => {
    setFormState("hidden");
  };

  return (
    <div className="new-expense">
      {formState === "hidden" && (
        <button onClick={addNewHandler}>Add New Expense</button>
      )}
      {formState === "shown" && (
        <ExpenseForm
          onCancelClick={cancelClickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
