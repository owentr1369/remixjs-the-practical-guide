// /expenses/$id

import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import { useNavigate, useLoaderData } from "@remix-run/react";
import Modal from "~/components/util/Modal";
import { getExpenseById } from "~/data/expense.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Update Expenses" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const ExpensesDynamicPage = () => {
  useLoaderData();
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

export const loader: LoaderFunction = async ({ params }) => {
  const expenseId = params.id;
  const currentExpense = await getExpenseById(expenseId?.toString()!);
  return currentExpense;
};
