// /expenses/$id

import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import { useNavigate, useLoaderData } from "@remix-run/react";
import Modal from "~/components/util/Modal";
import { getExpenseById, updateExpense } from "~/data/expense.server";
import { redirect } from "@remix-run/node";

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

export const action: ActionFunction = async ({ request, params }) => {
  const expenseId = params.id;
  const formData = await request.formData();
  const expenseData = {
    title: formData.get("title") as string,
    amount: +formData.get("amount")!,
    date: formData.get("date") as string,
  };
  if (!expenseId) {
    throw new Error("Invalid expense ID");
  }
  await updateExpense(expenseId, expenseData);
  return redirect("/expenses");
};
