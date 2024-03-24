import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledInput, StyledParagraph, StyledFormLabel } from '../../styles/balance';
import { GreyButtonWithR } from 'components/buttons/GreyButtonWithR';
import { getCurrentUser, updateBalance } from '../../redux/operations';
import { selectBalance, selectToken } from '../../redux/selectors';

export const Balance = () => {
  const token = useSelector(selectToken);
  const balance = useSelector(selectBalance);
  const [localBalance, setLocalBalance] = useState(balance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser(token));
  }, [dispatch, token]);

  const handleSubmit = event => {
    event.preventDefault();
    const newBalance = event.target.balance.value;
    const userData = {
      token,
      balance: newBalance,
    };
    setLocalBalance(newBalance);
    dispatch(updateBalance(userData));
    event.target.reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledParagraph>Balance:</StyledParagraph>
        <StyledFormLabel>
          <label>
            <StyledInput
              type="number"
              name="balance"
              placeholder={`${localBalance} PLN`}
            />
          </label>
          <GreyButtonWithR type="submit" text={'confirm'}></GreyButtonWithR>
        </StyledFormLabel>
      </StyledForm>
    </>
  );
};
