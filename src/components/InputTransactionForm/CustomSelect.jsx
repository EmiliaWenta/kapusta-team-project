import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { CustomSelectStyled } from '../../styles/InputTransactionForm/customSelect';
import expencesCategories from './expencesCategories.json';
import incomeCategories from './incomeCategories.json';
import { selectTransactionType } from '../../redux/selectors';

export const CustomSelect = ({
  keyName,

  placeholder,
  isLoading,
  onChange,
  value,
}) => {
  const [categories, setCategories] = useState([]);
  const transactionType = useSelector(selectTransactionType);

  useEffect(() => {
    if (transactionType === 'Expenses') {
      setCategories(expencesCategories);
    } else {
      setCategories(incomeCategories);
    }
  }, [transactionType]);

  return (
    <CustomSelectStyled
      classNamePrefix="react-select"
      key={keyName}
      defaultOptions
      placeholder={placeholder}
      options={categories}
      isLoading={isLoading}
      closeMenuOnSelect={true}
      onChange={onChange}
      defaultValue={value}
    />
  );
};
