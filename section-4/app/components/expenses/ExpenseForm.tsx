import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  // useSubmit,
  useNavigation,
} from "@remix-run/react";
import type { IExpense } from "~/types/expense";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData();
  // const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const currentExpense = useLoaderData() as IExpense | undefined;

  const defaultValues = currentExpense
    ? {
        title: currentExpense.title,
        amount: currentExpense.amount,
        date: currentExpense.date,
      }
    : {
        title: "",
        amount: 0,
        date: "",
      };
  // const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Perform your own form validation here
  //   // ...
  //   submit(event.currentTarget, { method: "POST" });
  // };

  return (
    <Form
      method="post"
      className="form"
      id="expense-form"
      // onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          defaultValue={defaultValues.title}
          type="text"
          id="title"
          name="title"
          required
          maxLength={30}
        />
      </p>
      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            defaultValue={defaultValues.amount}
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            defaultValue={
              defaultValues.date
                ? new Date(defaultValues.date).toISOString().slice(0, 10)
                : ""
            }
            type="date"
            id="date"
            name="date"
            max={today}
            required
          />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors as Record<string, string>).map(
            (error: string) => (
              <li key={error}>{error}</li>
            )
          )}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Expense"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
