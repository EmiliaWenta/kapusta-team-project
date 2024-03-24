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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('users/login', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginGoogle = createAsyncThunk(
  '/users/loginGoogle',

  async (credentials, thunkAPI) => {
    try {
      const data = {
        credentials,
      };
      const response = await axios.post(
        'users/loginGoogle',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

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
      const response = await axios.post(
        'transactions',
        JSON.stringify(credentials),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

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
      const { token, id, type } = credentials;
      await axios.delete(`transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { id, type };
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
      return { response: response.data, year, month };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDetailedCategory = createAsyncThunk(
  'report/getDetailedCategory',
  async ({ token, credentials }, thunkAPI) => {
    try {
      const { type, category, year, month } = credentials;
      const response = await axios.get(
        `report/detailed/category?type=${type}&category=${category}&year=${year}&month=${month}`,
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
      console.log(token);
      const response = await axios.post(
        'report/expenses',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
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
      console.log(token);
      const response = await axios.post(
        'report/income',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// CATEGORIES
export const getExpensesCategories = createAsyncThunk(
  'transactions/getExpencesCategories',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('categories/expenses', {
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
export const getIncomeCategories = createAsyncThunk(
  'transactions/getIncomeCategories',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('categories/income', {
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
