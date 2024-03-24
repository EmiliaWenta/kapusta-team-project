export const selectIsLogged = state => state.auth.isLogged;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.user.token;
export const selectUserId = state => state.auth.user.id;
export const selectBalance = state => state.auth.user.balance;
export const selectTransactionType = state => state.pageSettings;
export const selectExpenses = state => state.transactions.expenses;
export const selectIncome = state => state.transactions.income;
export const selectAddedTransaction = state =>
  state.transactions.addedTransaction;
export const selectDeletedId = state => state.transactions.idToDelete;
export const selectExpensesCategory = state =>
  state.transactions.expensesCategories;
export const selectIncomeCategory = state =>
  state.transactions.incomeCategories;
export const selectExpensesReport = state => state.report.expensesReport;
export const selectIncomeReport = state => state.report.incomeReport;
