import { useState } from 'react';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import { InputWrapper } from '../../styles/Finance/finance';
import { ArrowBack } from './FinanceButtons';

const TransactionForm = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);

  const changeComponentVisibility = () => {
    setShowTransactionForm(!showTransactionForm);
  };
  return (
    <div>
      <InputWrapper changeComponentVisibility={changeComponentVisibility}>
        <ArrowBack />
        <InputTransactionForm />
      </InputWrapper>
    </div>
  );
};
export default TransactionForm;
