import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #52555f;
  font-size: 12px;
  font-weight: 700px;
  text-transform: uppercase;
  height: 44px;
  width: 125px;
  border: 2px solid #f5f6fb;
  border-radius: 16px;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledTomatoButton = styled(StyledButton)`
  color: #ffffff;
  background-color: #ff751d;
  border: none;

  @media (min-width: 1280px) {
    width: 136px;
  }
`;

export const StyledGreyButton = styled(StyledButton)`
  color: #52555f;
  background-color: #f5f6fb;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  width: 116px;
  @media (min-width: 772px) {
    width: 122px;
  }
`;

export const StyledTomatoButtonWithShadow = styled(StyledTomatoButton)`
  box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  width: 116px;
  @media (min-width: 772px) {
    width: 122px;
  }
`;

export const StyledIncomeOrExpensesButton = styled(StyledGreyButton)`
  border-radius: 0px;
  box-shadow: none;
  width: 158px;
  height: 53px;
  &:active {
    background-color: #ff751d;
    color: #ffffff;
    border-color: #ff751d;
  }
`;
