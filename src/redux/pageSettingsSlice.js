import { createSlice } from '@reduxjs/toolkit';

const pageSettingsSlice = createSlice({
  initialState: 'Expenses',
  name: 'transationType',
  reducers: {
    setTransactionType(state, action) {
      return action.payload;
    },
  },
});

export const pageSettingsReducer = pageSettingsSlice.reducer;
export const { setTransactionType } = pageSettingsSlice.actions;
