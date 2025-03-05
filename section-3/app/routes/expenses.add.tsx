// /expenses/add

import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Expenses" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const ExpensesAddPage = () => {
  return (
    <div>
      <h1 className="text-center">Add Expense</h1>
      <Modal>
        <ExpenseForm />
      </Modal>
    </div>
  );
};

export default ExpensesAddPage;
