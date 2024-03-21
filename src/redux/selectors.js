export const selectIsLogged = state => state.auth.isLogged;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.user.token;
export const selectBalance = state => state.auth.user.balance;
export const selectTransationType = state => state.transationType;
export const selectExpences = state => state.transactions.expences;
export const selectIncome = state => state.transactions.income;
