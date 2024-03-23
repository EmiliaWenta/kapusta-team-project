import {
  StyledForm,
  StyledInput,
  StyledParagraph,
} from '../../styles/ReportPage/BalanceReportPage';

export const BalanceReportPage = () => {
  return (
    <StyledForm>
      <StyledParagraph>Balance:</StyledParagraph>
      <label>
        <StyledInput type="number" name="balance" placeholder="00.00 UAH" />
      </label>
    </StyledForm>
  );
};

export default BalanceReportPage;
