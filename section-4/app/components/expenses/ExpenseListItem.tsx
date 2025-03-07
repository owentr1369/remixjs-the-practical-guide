import { Link, Form } from "@remix-run/react";

function ExpenseListItem({
  id,
  title,
  amount,
}: {
  id: string;
  title: string;
  amount: number;
}) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <Form method="post" action={`/expenses/${id}`}>
          <button type="submit" name="intent" value="delete">
            Delete
          </button>
        </Form>
        <Link to={"/expenses/" + id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
