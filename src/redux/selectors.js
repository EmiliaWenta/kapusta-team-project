export const selectIsLogged = state => state.auth.isLogged;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.user.token;
export const selectUserId = state => state.auth.user.id;
export const selectBalance = state => state.auth.user.balance;
export const selectTransactionType = state => state.pageSettings;
export const selectExpenses = state => state.transactions.expenses;
export const selectIncome = state => state.transactions.income;
