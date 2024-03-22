import { BalanceAlert } from 'components/BalanceAlert/BalanceAlert';
import { StyledForm, StyledInput, StyledParagraph } from '../../styles/balance';
import { GreyButtonWithR } from 'components/buttons/GreyButtonWithR';
import { useState } from 'react';

export const Balance = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledParagraph>Balance:</StyledParagraph>
        <label>
          <StyledInput
            type="number"
            name="balance"
            placeholder="00.00 UAH"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <GreyButtonWithR type="submit" text={'confirm'}></GreyButtonWithR>
      </StyledForm>
      {inputValue.trim() === '' && <BalanceAlert />}
    </>
  );
};
