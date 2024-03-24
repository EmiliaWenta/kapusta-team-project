import { createSlice } from '@reduxjs/toolkit';

import {
  getDetailedCategory,
  getDetailedReport,
  getExpensesReport,
  getIncomeReport,
} from './operations';

const initialState = {
  detailedData: [],
  expensesReport: {},
  incomeReport: {},
  reportData: null,
  categoryData: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDetailedReport.fulfilled, (state, action) => {
        state.detailedData = action.payload;
        console.log(state.detailedData);
      })
      .addCase(getExpensesReport.fulfilled, (state, action) => {
        state.expensesReport = action.payload.expensesReport;
      })
      .addCase(getIncomeReport.fulfilled, (state, action) => {
        state.incomeReport = action.payload.report;
      })
      .addCase(getDetailedCategory.fulfilled, (state, action) => {
        state.categoryData = action.payload;
      });
  },
});

export const reportReducer = reportSlice.reducer;
