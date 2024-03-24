import { createSlice } from '@reduxjs/toolkit';
import { getDetailedReport, getDetailedCategory } from './operations';

const initialState = {
  reportData: null,
  categoryData: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getDetailedReport.fulfilled, (state, action) => {
        state.reportData = action.payload;
      })
      .addCase(getDetailedCategory.fulfilled, (state, action) => {
        state.categoryData = action.payload;
      });
  },
});

export const reportReducer = reportSlice.reducer;
