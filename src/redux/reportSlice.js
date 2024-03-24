import { createSlice } from '@reduxjs/toolkit';
import {
  getDetailedCategory,
  getDetailedReport,
  getExpensesReport,
  getIncomeReport,
} from './operations';
const initialState = {
  detailedData: [],
  detailedExpenses: {},
  detailedIncome: {},
  expensesReport: {},
  incomeReport: {},
  detailedBalance: 0,
  reportData: null,
  categoryData: null,
  currentYear: 0,
  currentMonth: 0,
};
const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDetailedReport.fulfilled, (state, action) => {
        console.log(action.payload);
        state.detailedData = action.payload.response;
        state.detailedExpenses =
          action.payload.response.report.ExpenseCategories;
        state.detailedIncome = action.payload.response.report.IncomeCategories;
        state.detailedBalance = action.payload.response.report.Balance;
        state.currentMonth = action.payload.month;
        state.currentYear = action.payload.year;
      })
      .addCase(getExpensesReport.fulfilled, (state, action) => {
        state.expensesReport = action.payload.expensesReport;
      })
      .addCase(getIncomeReport.fulfilled, (state, action) => {
        state.incomeReport = action.payload.report;
      })
      .addCase(getDetailedCategory.fulfilled, (state, action) => {
        state.categoryData = action.payload;
      })
      .addCase(getDetailedCategory.rejected, (state, action) => {
        state.categoryData = [];
      });
  },
});
export const reportReducer = reportSlice.reducer;
