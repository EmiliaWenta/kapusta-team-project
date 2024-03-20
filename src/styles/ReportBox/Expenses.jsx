import { colors, above768px, above1280px } from '../globalStyles';
const { default: styled } = require('styled-components');

export const ExpensesBox = styled.div`
  display: flex;
  flex-direction: column;

  ${above1280px`
  width: 1034px;`}
`;

export const ExpensesHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  margin-top: 10px;
`;

export const ExpensesHeader = styled.p`
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const ExpensesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-around;
  row-gap: 10px;
  padding: 0px;

  ${above768px`
  column-gap: 40px;
  `}

  ${above1280px`
  padding: 0px 205px;`}
`;

export const ExpensesListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  cursor: pointer;

  &:active,
  &:hover {
    fill: ${colors.brandOrange};
  }
`;

export const ExpensesDivider = styled.div`
  min-width: 280px;
  height: 1px;
  background-color: ${colors.expensesDivider};

  ${above768px`
        display: none;
  `}
`;
