import { createSlice } from '@reduxjs/toolkit';

const pageSettingsSlice = createSlice({
  initialState: 'Expences',
  name: 'transationType',
  reducers: {
    setTransactionType(state, action) {
      return action.payload;
    },
  },
});

export const pageSettingsReducer = pageSettingsSlice.reducer;
export const { setTransactionType } = pageSettingsSlice.actions;
