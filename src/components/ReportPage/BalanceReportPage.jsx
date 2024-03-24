import { useSelector } from 'react-redux';
import {
  StyledForm,
  StyledInput,
  StyledParagraph,
} from '../../styles/ReportPage/BalanceReportPage';
import { selectDetailedBalance } from '../../redux/selectors';

export const BalanceReportPage = () => {
  const balanceData = useSelector(selectDetailedBalance);
  return (
    <StyledForm>
      <StyledParagraph>Balance:</StyledParagraph>
      <label>
        <StyledInput
          type="text"
          name="balance"
          placeholder="00.00 PLN"
          value={balanceData + 'PLN'}
          readOnly
        />
      </label>
    </StyledForm>
  );
};

export default BalanceReportPage;
