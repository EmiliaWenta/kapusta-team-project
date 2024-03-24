import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { CustomSelectStyled } from '../../styles/InputTransactionForm/customSelect';

import {
  selectExpensesCategory,
  selectIncomeCategory,
  selectToken,
  selectTransactionType,
} from '../../redux/selectors';
import {
  getExpensesCategories,
  getIncomeCategories,
} from '../../redux/operations';

export const CustomSelect = ({
  keyName,

  placeholder,
  isLoading,
  onChange,
  value,
}) => {
  const [categories, setCategories] = useState([]);
  const transactionType = useSelector(selectTransactionType);
  const token = useSelector(selectToken);
  const incomeCategories = useSelector(selectIncomeCategory);
  const expensesCategories = useSelector(selectExpensesCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomeCategories(token));
    dispatch(getExpensesCategories(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (transactionType === 'Expenses') {
      setCategories(expensesCategories);
    } else {
      setCategories(incomeCategories);
    }
  }, [transactionType, expensesCategories, incomeCategories]);

  const categoriesWithValue = categories.map(item => ({
    value: item,
    label: item,
  }));

  return (
    <CustomSelectStyled
      classNamePrefix="react-select"
      key={keyName}
      defaultOptions
      placeholder={placeholder}
      options={categoriesWithValue}
      isLoading={isLoading}
      closeMenuOnSelect={true}
      onChange={onChange}
      defaultValue={value}
    />
  );
};
