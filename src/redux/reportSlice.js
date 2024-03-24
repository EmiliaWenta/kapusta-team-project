import { createSlice } from '@reduxjs/toolkit';
import {
  getDetailedReport,
  getExpensesReport,
  getIncomeReport,
} from './operations';

const initialState = { detailedData: [], expensesReport: {}, incomeReport: {} };

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDetailedReport.fulfilled, (state, action) => {
        state.detailedData = action.payload;
      })
      .addCase(getExpensesReport.fulfilled, (state, action) => {
        state.expensesReport = action.payload.expensesReport;
      })
      .addCase(getIncomeReport.fulfilled, (state, action) => {
        console.log(action.payload);
        state.incomeReport = action.payload.report;
      });
  },
});

export const reportReducer = reportSlice.reducer;
