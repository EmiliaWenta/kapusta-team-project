import { colors } from './globalStyles';
const { default: styled } = require('styled-components');

export const ExpensesBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 300px;
`;

export const ExpensesHeader = styled.p`
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0px 0px 20px 0px;
`;

export const ExpensesList = styled.ul`
  display: flex;
  width: 280px;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  row-gap: 10px;
  background-color: beige;
  padding: 0px 20px;
  margin: 0px;
`;

export const ExpensesListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ExpensesListItemText = styled.p`
  font-size: 12px;
  line-height: 14.06px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.textBasicGray};
`;

export const ExpensesSvg = styled.svg`
  fill: ${colors.iconsBlue};

  &:active,
  &:hover {
    fill: ${colors.brandOrange};
  }
`;

export const ExpensesDivider = styled.div`
  min-width: 280px;
  height: 1px;
  background-color: ${colors.expensesDivider};
`;
