import { css, styled } from 'styled-components';
import { colors, above768px } from './globalStyles';

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
    justify-content: space-between;
    height: 44px;
    flex-direction: row;
  `)}
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 32px;

  ${above768px(css`
    flex-direction: row;
    gap: unset;
    flex-grow: 2;
    justify-content: space-between;
  `)}
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

export const MounthBox = styled.div`
  min-width: 150px;
`;
