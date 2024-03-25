import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputTransactionForm } from 'components/InputTransactionForm/InputTransactionForm';
import { InputWrapper } from '../../styles/Finance/finance';
import { ArrowBack } from './FinanceButtons';
import { StyledArrBack } from 'styles/Finance/financeBox';

export function TransactionForm() {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const navigate = useNavigate();

  const changeComponentVisibility = () => {
    setShowTransactionForm(!showTransactionForm);
    navigate('/FinanceBox/BallanceWrapper.jsx');
  };
  return (
    <div>
      <InputWrapper changeComponentVisibility={changeComponentVisibility}>
        {showTransactionForm && <InputTransactionForm />}
        <StyledArrBack>
          <ArrowBack navigate={navigate} path="/finance" />
        </StyledArrBack>
        <InputTransactionForm />
      </InputWrapper>
    </div>
  );
}
