import { createSlice } from '@reduxjs/toolkit';
import {
  addTransation,
  deleteTransation,
  getExpences,
  getIncome,
} from './operations';

const initialState = {
  income: [],
  expences: [],
};

const transactionsSlice = createSlice({
  name: 'transations',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getIncome.fulfilled, (state, action) => {
        state.income = action.payload;
      })
      .addCase(getExpences.fulfilled, (state, action) => {
        state.expences = action.payload;
      })
      .addCase(addTransation.fulfilled, (state, action) => {
        if (action.payload.type === 'Expeces') {
          state.expences.push(action.payload);
        } else {
          state.income.push(action.payload);
        }
      })
      .addCase(deleteTransation.fulfilled, (state, action) => {
        if (action.payload.type === 'Expences') {
          const index = state.expences.findIndex(
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
