import { StyledForm, StyledInput, StyledParagraph } from '../../styles/balance';
import { GreyButtonWithR } from 'components/buttons/GreyButtonWithR';

export const Balance = () => {
  return (
    <StyledForm>
      <StyledParagraph>Balance:</StyledParagraph>
      <label>
        <StyledInput type="number" name="balance" placeholder="00.00 UAH" />
      </label>
      <GreyButtonWithR type="submit" text={'confirm'}></GreyButtonWithR>
    </StyledForm>
  );
};
