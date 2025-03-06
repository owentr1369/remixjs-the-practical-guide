import { prisma } from "./database.server";

export async function addExpense(expenseData: {
  title: string;
  amount: number;
  date: string;
  dateAdded: string;
}) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: expenseData.date,
        dateAdded: expenseData.dateAdded,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
