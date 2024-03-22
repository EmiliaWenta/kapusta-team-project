
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledInput, StyledParagraph } from '../../styles/balance';
import { GreyButtonWithR } from 'components/buttons/GreyButtonWithR';
import { getCurrentUser, updateBalance } from '../../redux/operations';
import { selectBalance, selectToken } from '../../redux/selectors';
import { BalanceAlert } from 'components/BalanceAlert/BalanceAlert';

export const Balance = () => {
  const token = useSelector(selectToken);
  const balance = useSelector(selectBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser(token));
  }, [dispatch, token]);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.balance.value);
    const userData = {
      token,
      balance: event.target.balance.value,
    };
    dispatch(updateBalance(userData));
  };

  return (
     <>
    <StyledForm onSubmit={handleSubmit}>
      <StyledParagraph>Balance:</StyledParagraph>
      <label>
        <StyledInput
          type="number"
          name="balance"
          placeholder={`${balance} PLN`}
        />
      </label>
      <GreyButtonWithR type="submit" text={'confirm'}></GreyButtonWithR>
    </StyledForm>

      {inputValue.trim() === '' && <BalanceAlert />}
    </>

  );
};
