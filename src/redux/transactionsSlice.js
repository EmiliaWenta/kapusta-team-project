import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getExpences,
  getIncome,
} from './operations';

const initialState = {
  income: [],
  expenses: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getIncome.fulfilled, (state, action) => {
        state.income = action.payload;
      })
      .addCase(getExpences.fulfilled, (state, action) => {
        state.expenses = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        if (action.payload.type === 'Expenses') {
          state.expenses.push(action.payload);
        } else {
          state.income.push(action.payload);
        }
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        if (action.payload.type === 'Expenses') {
          const index = state.expenses.findIndex(
            transation => transation._id === action.payload._id
          );
          state.expences.splice(index, 1);
        } else {
          const index = state.income.findIndex(
            transation => transation._id === action.payload._id
          );
          state.income.splice(index, 1);
        }
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
