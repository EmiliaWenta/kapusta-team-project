import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getExpenses,
  getExpensesCategories,
  getIncome,
  getIncomeCategories,
} from './operations';

const initialState = {
  income: [],
  expenses: [],
  addedTransaction: {},
  idToDelete: '',
  expensesCategories: [],
  incomeCategories: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getIncome.fulfilled, (state, action) => {
        state.income = action.payload;
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        if (action.payload.type === 'Expenses') {
          state.expenses.push(action.payload);
        } else {
          state.income.push(action.payload);
        }
        state.addedTransaction = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        if (action.payload.type === 'Expenses') {
          const index = state.expenses.findIndex(
            transation => transation.id === action.payload.id
          );

          state.expenses.splice(index, 1);
        } else {
          const index = state.income.findIndex(
            transation => transation.id === action.payload.id
          );
          state.income.splice(index, 1);
        }
        state.idToDelete = action.payload.id;
      })
      .addCase(getExpensesCategories.fulfilled, (state, action) => {
        state.expensesCategories = action.payload;
      })
      .addCase(getIncomeCategories.fulfilled, (state, action) => {
        state.incomeCategories = action.payload;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
