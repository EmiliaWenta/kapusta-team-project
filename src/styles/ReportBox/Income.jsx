import { colors, above768px, above1280px } from '../globalStyles';

const { default: styled } = require('styled-components');

export const IncomeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 190px;

  ${above768px`
  width: 704px; 
  height: 195px;
  border-radius: 30px;
  box-shadow: 0px 10px 60px 0px #AAB2C533;
  `}

  ${above1280px`
  width: 1034px;`}
`;

export const IncomeHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  margin-top: 10px;
`;
export const IncomeHeader = styled.p`
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const IncomeList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  margin: 0px;
  column-gap: 22px;

  ${above1280px`
  padding: 0px 205px;
  `}
`;

export const IncomeListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IncomeListItemText = styled.p`
  font-size: 12px;
  line-height: 14.06px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.textBasicGray};
`;

export const IncomeSvg = styled.svg`
  fill: ${colors.iconsBlue};
  cursor: pointer;

  &:active,
  &:hover {
    fill: ${colors.brandOrange};
  }
`;
