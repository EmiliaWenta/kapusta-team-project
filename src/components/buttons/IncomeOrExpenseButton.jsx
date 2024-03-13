import { StyledIncomeOrExpensesButton } from '../../styles/button.jsx';

export const IncomeOrExpensesButton = ({ text, onClick }) => {
  return (
    <StyledIncomeOrExpensesButton onClick={onClick}>
      {text}
    </StyledIncomeOrExpensesButton>
  );
};
