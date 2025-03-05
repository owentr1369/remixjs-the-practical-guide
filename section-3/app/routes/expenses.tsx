// Shared layout

import React from "react";
import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";
import { LinksFunction } from "@remix-run/node";

export const link: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

const ExpensesLayout = () => {
  return (
    <main>
      <p>Shared element!</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
