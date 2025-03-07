const isValidTitle = (value: string): boolean => {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= 30
  );
};

function isValidAmount(value: number): boolean {
  return !isNaN(value) && value > 0;
}

function isValidDate(value: string): boolean {
  return (
    typeof value === "string" &&
    new Date(value).getTime() < new Date().getTime()
  );
}

interface ExpenseInput {
  title: string;
  amount: number;
  date: string;
}

interface ValidationErrors {
  title?: string;
  amount?: string;
  date?: string;
}

export function validateExpenseInput(input: ExpenseInput): void {
  let validationErrors: ValidationErrors = {};

  if (!isValidTitle(input.title)) {
    validationErrors.title =
      "Invalid expense title. Must be at most 30 characters long.";
  }

  if (!isValidAmount(input.amount)) {
    validationErrors.amount =
      "Invalid amount. Must be a number greater than zero.";
  }

  if (!isValidDate(input.date)) {
    validationErrors.date = "Invalid date. Must be a date before today.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
