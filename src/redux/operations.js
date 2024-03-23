import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://kapusta-team-project-backend.onrender.com/api/';

export const register = createAsyncThunk(
  '/users/register',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('users/signup', credentials);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('users/login', credentials);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  '/users/logout',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('users/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/getCurrentUser',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBalance = createAsyncThunk(
  'users/updateBalance',
  async (credentials, thunkAPI) => {
    try {
      const { token, balance } = credentials;
      const response = axios.patch(
        'users/balance',
        { balance },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//TRANSATIONS

export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('transactions/income', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenses = createAsyncThunk(
  'transactions/getExpences',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('transactions/expenses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransation',
  async ({ token, credentials }, thunkAPI) => {
    try {
      const response = await axios.post('transactions', credentials, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransation',
  async (credentials, thunkAPI) => {
    try {
      const { token, _id, type } = credentials;
      await axios.delete('transations/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { _id, type };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// REPORT

export const getDetailedReport = createAsyncThunk(
  'report/getDetailedReport',
  async ({ token, credentials }, thunkAPI) => {
    try {
      const { year, month } = credentials;
      const response = await axios.get(
        `report/detailed?year=${year}&month=${month}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDetailedCategory = createAsyncThunk(
  'report/getDetailedCategory',
  async ({ token, credentials }, thunkAPI) => {
    try {
      const response = await axios.get(
        'report/detailed/category',
        credentials,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpensesReport = createAsyncThunk(
  'report/getExpenses',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('report/expenses', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncomeReport = createAsyncThunk(
  'report/getIncome',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('report/income', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
