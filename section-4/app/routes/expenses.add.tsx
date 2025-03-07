// /expenses/add

import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { addExpense } from "~/data/expense.server";
import { redirect } from "@remix-run/node";
import { validateExpenseInput } from "~/data/validate.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Add Expenses" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const ExpensesAddPage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    // Navigate back to the expenses page
    navigate("..");
  };
  return (
    <div>
      <h1 className="text-center">Add Expense</h1>
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
    </div>
  );
};

export default ExpensesAddPage;

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const expenseData = {
    title: formData.get("title") as string,
    amount: +formData.get("amount")!,
    date: formData.get("date") as string,
  };
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  await addExpense(expenseData);
  return redirect("/expenses");
};
