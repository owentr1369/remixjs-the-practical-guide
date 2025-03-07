// Shared layout

import React from "react";
import { Outlet, Link, useLoaderData } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import { LinksFunction, json } from "@remix-run/node";
import ExpensesList from "~/components/expenses/ExpensesList";
import { FaPlus, FaDownload } from "react-icons/fa";

import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getExpenses } from "~/data/expense.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Expenses" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const link: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesLayout = () => {
  const expenses = useLoaderData();
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Download Expenses</span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
};

export default ExpensesLayout;

export const loader: LoaderFunction = async () => {
  const expenses = await getExpenses();
  return expenses;
};
