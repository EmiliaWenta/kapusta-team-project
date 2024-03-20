import { css, styled } from 'styled-components';
import { colors, above768px, above1280px } from './globalStyles';
import { NavLink } from 'react-router-dom';

export const BalanceContainer = styled.div`
  box-sizing: border-box;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  flex-direction: column-reverse;

  ${above768px(css`
    min-width: 704px;

    height: 44px;
    flex-direction: row;
  `)}

  ${above1280px`
  min-width: 1034px;
  `}
`;

export const StyledBtn = styled.button`
  box-sizing: border-box;

  height: 44px;
  width: 125px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: rgba(82, 85, 95, 0.7);
  background-color: ${colors.backgroundColor};

  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    color 400ms cubic-bezier(0.4, 0, 0.2, 1),
    border 400ms cubic-bezier(0.4, 0, 0.2, 1);

  border: 2px solid #ffffff;
  border-radius: 16px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: ${colors.brandOrange};

    border: none;
  }

  ${above768px(css`
    display: none;
  `)}
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 22px;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: 0.04em;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${colors.brandOrange};
  }

  ${above768px(css`
    align-self: unset;
    margin-bottom: 0;
    flex-grow: 2;
  `)}

  ${above1280px`
  flex-grow: 0`}
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 32px;

  ${above768px(css`
    flex-direction: row;
  `)}
`;

export const FormWrapper = styled.div`
  justify-content: flex-start;
`;

export const PeriodContainer = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${above768px(css`
    flex-direction: row;
  `)}
`;

export const MainPageSvg = styled.svg`
  height: 18px;
  width: 18px;

  margin-right: 19px;
`;

export const Period = styled.p`
  font-size: 12px;
  line-height: 1.67;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${colors.textInputGray};
  margin: 0;
`;

export const PeriodBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: none;

  cursor: pointer;
`;

export const PeriodArrow = styled.svg`
  height: 14px;
  width: 12px;
`;

export const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MounthContainer = styled(BaseContainer)`
  width: fit-content;
`;

export const PeriodData = styled.p`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: black;
  user-select: none;
`;

export const MainPageText = styled.p`
  margin: 0;
  display: none;
  color: ${colors.textInputGray};

  ${above768px(css`
    display: inline-flex;
  `)}
`;
export const MounthBox = styled.div`
  display: flex;
  flex-direction: column;
`;
