import { css, styled } from 'styled-components';

import { colors, above768px, above1280px } from './globalStyles';

export const Container = styled.div`
  margin-top: 8px;
  position: relative;
`;

export const Box = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4px 0;
  position: fixed;
  bottom: 0;
  left: 0;

  ${above768px(css`
    position: static;
    width: fit-content;
    justify-content: flex-start;
    gap: 0;
  `)}
`;

export const TabLink = styled.div`
  width: calc(50%);
  height: 53px;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.inputBorder};
  text-transform: uppercase;
  font-weight: bold;

  filter: none;
  &:hover,
  &:focus {
    filter: none;
    background-color: ${colors.brandOrange};
    color: ${colors.modalBackgroundColor};
  }

  ${above768px(css`
    width: 138px;
    height: 40px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: ${colors.tabInactive};

    &:hover,
    &:focus {
      filter: none;
      background-color: ${colors.tabActive};
      color: ${colors.brandOrange};
    }
  `)}
`;

export const Outlet = styled.div`
  padding: 0px;
  margin-top: 0px;
  border-radius: 30px;

  ${above768px(css`
    padding: 24px 40px 42px;
    width: 704px;
    height: 616px;
    background-color: ${colors.modalBackgroundColor};
    border-radius: 0px 30px 30px 0px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  `)}
  ${above1280px(css`
    padding: 32px 32px 61px 32px;
    width: 1098px;
    height: 579px;
  `)}
`;

export const TabWrapper = styled.div`
  background-color: ${colors.inputBorder};
`;

export const TransactWrapper = styled.div`
  background-color: ${colors.modalBackgroundColor};
`;
