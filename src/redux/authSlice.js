import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
  isLogged: false,
  user: { email: null, password: null },
  token: null,
};

const setCommonState = (state, action) => {
  state.isLogged = true;
  state.user.email = action.payload.user.email;
  state.token = action.payload.token;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, setCommonState)
      .addCase(login.fulfilled, setCommonState)
      .addCase(logout.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
