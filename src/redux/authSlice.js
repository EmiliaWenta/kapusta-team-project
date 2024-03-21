import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, register, login, logout } from './operations';

const initialState = {
  isLogged: false,
  user: { email: '', id: '', balance: 0, token: null },
};

const setCommonState = (state, action) => {
  state.isLogged = true;
  state.user.email = action.payload.user.email;
  state.user.token = action.payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, setCommonState)
      .addCase(login.fulfilled, setCommonState)
      .addCase(logout.fulfilled, () => initialState)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user.balance = action.payload.user.balance;
        state.user.id = action.payload.user._id;
      });
  },
});

export const authReducer = authSlice.reducer;
