import React from "react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

const ExpensesDynamicPage = () => {
  return (
    <div>
      <h1 className="text-center">Update Expense</h1>
      <ExpenseForm />
    </div>
  );
};

export default ExpensesDynamicPage;
