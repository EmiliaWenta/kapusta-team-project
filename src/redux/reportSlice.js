import { createSlice } from '@reduxjs/toolkit';
import { getDetailedReport } from './operations';
const initialState = { detailedData: [] };
const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      getDetailedReport.fulfilled,
      (state, action) => (state.detailedData = action.payload)
    );
  },
});
export const reportReducer = reportSlice.reducer;
