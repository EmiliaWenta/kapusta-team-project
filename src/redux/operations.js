import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  '/users/register',
  async (credentials, thunkAPI) => {
    try {
      //     const response = await axios.post('/users/signup', credentials);
      console.log('Register');
      //      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      //   const response = await axios.post('/users/login', credentials);
      //  return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    //    const response = await axios.post('/users/logout');
    //   return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
