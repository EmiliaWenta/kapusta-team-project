import { createSlice } from '@reduxjs/toolkit';
import { getDetailedReport } from './operations';

const initialState = {
  reportData: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: builder => {
    builder.addCase(getDetailedReport.fulfilled, (state, action) => {
      state.reportData = action.payload;
    });
  },
});

export const reportReducer = reportSlice.reducer;
