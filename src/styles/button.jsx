import styled, { css } from 'styled-components';
import { colors, above768px, above1280px } from './globalStyles';

export const StyledButton = styled.button`
  color: ${colors.textBasicGray};
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
  background-color: ${colors.brandOrange};
  border: none;

  ${above1280px(css`
    width: 136px;
  `)}
`;

export const StyledGreyButton = styled(StyledButton)`
  color: ${colors.textBasicGray};
  background-color: #f5f6fb;
  box-shadow: 1px 2px 5px rgba(170, 178, 197, 0.4);
  width: 116px;

  ${above768px(css`
    width: 122px;
  `)}
`;

export const StyledTomatoButtonWithShadow = styled(StyledTomatoButton)`
  box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  width: 116px;

  ${above768px(css`
    width: 122px;
  `)}
`;

export const StyledIncomeOrExpensesButton = styled(StyledGreyButton)`
  border-radius: 0px;
  box-shadow: none;
  width: 158px;
  height: 53px;
  &:active {
    background-color: ${colors.brandOrange};
    color: #ffffff;
    border-color: ${colors.brandOrange};
  }
`;
export const StyledButtonSvg = styled.button`
  background-color: #fff;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  width: 18px;
  height: 18px;
  padding: 0px;
`;

export const StyledSvg = styled.svg`
  fill: ${colors.textBasicGray};
`;
