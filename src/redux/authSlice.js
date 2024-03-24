import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  register,
  login,
  logout,
  loginGoogle,
} from './operations';

const initialState = {
  isLogged: false,
  registerSuccess: false,
  user: { email: '', id: '', balance: 0, token: null },
  errors: { registerError: null, loginError: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.errors.registerError = null;
        state.errors.loginError = null;
        state.registerSuccess = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogged = true;
        state.user.email = action.payload.user.email;
        state.user.token = action.payload.token;
        state.errors.registerError = null;
        state.errors.loginError = null;
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.isLogged = true;
        state.user.token = action.payload.token;
        state.user.email = action.payload.user.email;
        state.errors.registerError = null;
        state.errors.loginError = null;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user.balance = action.payload.user.balance;
        state.user.id = action.payload.user._id;
      })
      .addCase(register.rejected, (state, action) => {
        state.errors.registerError = action.payload.response.data.message;
        state.registerSuccess = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.errors.loginError = action.payload.response.data.message;
        state.registerSuccess = false;
      })
      .addCase(loginGoogle.rejected, (state, action) => {
        state.errors.loginError = 'Login failure. Try again...';
      });
  },
});

export const authReducer = authSlice.reducer;
