import { prisma } from "./database.server";

export async function addExpense(expenseData: {
  title: string;
  amount: number;
  date: string;
}) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getExpenses() {
  try {
    return await prisma.expense.findMany({
      orderBy: {
        date: "desc",
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getExpenseById(expenseId: string) {
  try {
    return await prisma.expense.findUnique({
      where: {
        id: expenseId,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
