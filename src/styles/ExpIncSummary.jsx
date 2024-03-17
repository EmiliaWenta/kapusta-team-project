import styled from 'styled-components';
import { colors, above768px, above1280px } from './globalStyles';

export const ExpIncBox = styled.div`
  display: flex;
  width: 280px;
  height: 85px;
  flex-direction: row;
  margin: 0px 20px;
  border-radius: 20px;
  justify-content: center;

  ${above768px`
  height: 50px;
  width: 704px;
  border-radius: 30px; `}

  ${above1280px`
  width: 1034px;`}
`;

export const ExpIncList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  align-items: center;
  padding-inline-start: 0px;
`;

export const ExpIncListItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  ${above768px`
  flex-direction: row;
  column-gap: 15px;`}
`;

export const ExpIncText = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin: 0px;
  color: ${colors.textBasicGray};
`;

export const ExpIncTextRed = styled(ExpIncText)`
  color: red;
`;
export const ExpIncTextGreen = styled(ExpIncText)`
  color: green;
`;

export const ExpIncDivider = styled.div`
  width: 1px;
  height: 70px;
  background-color: ${colors.expensesDivider};

  ${above768px`
  height: 36px;`}
`;
