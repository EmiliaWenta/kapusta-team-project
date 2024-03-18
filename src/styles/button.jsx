import styled, { css } from 'styled-components';
import { colors, above768px, above1280px } from './globalStyles';

export const StyledButton = styled.button`
  color: ${colors.textBasicGray};
  font-size: 12px;
  font-weight: 700;
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

export const StyledGreyButtonWithR = styled(StyledGreyButton)`
  color: rgba(82, 85, 95, 0.7);
  border-radius: 0px 22px 22px 0px;
  width: 142px;
  padding: 12px 16px;
  text-align: left;
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: none;
  outline: none;
  box-shadow: none;
  &:focus {
  color: #ffffff;
  background-color:${colors.brandOrange};
  }
  &:hover {
    color: #ffffff;
    background-color:${colors.brandOrange};
  }
  ${above768px(css`
    width: 125px;
    border-radius: 22px;
    text-align: center;
    padding: 0px;
  `)}
  
}
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
