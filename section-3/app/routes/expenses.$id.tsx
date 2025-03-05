// /expenses/$id

import type { MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import { useNavigate } from "@remix-run/react";
import Modal from "~/components/util/Modal";

export const meta: MetaFunction = () => {
  return [
    { title: "Update Expenses" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const ExpensesDynamicPage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    // Navigate back to the expenses page
    navigate("..");
  };
  return (
    <div>
      <h1 className="text-center">Update Expense</h1>
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
    </div>
  );
};

export default ExpensesDynamicPage;
