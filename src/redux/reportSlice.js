import { createSlice } from '@reduxjs/toolkit';
//import { } from './operations';

const initialState = {};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: builder => {},
});

export const reportReducer = reportSlice.reducer;
