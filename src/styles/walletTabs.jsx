import { css, styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, above768px, above1280px } from './globalStyles';

export const Container = styled.div`
  margin: 0 32px 0 0;
  position: relative;
  width: 100%;
`;

export const Box = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4px;
  position: fixed;
  bottom: 0;
  left: 0;

  ${above768px(css`
   position: static;
    width: fit-content;
    justify-content: flex-start;
    gap: 0;
  }
  `)}
`;

export const TabLink = styled(NavLink)`
  width: calc(50% - 2px);
  height: 53px;
  border-radius: 0;
  box-shadow: none;
  background-color: ${colors.inputBorder};
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: none;

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
  width: 100%;
  border-radius: 30px;
  position: relative;

  ${above768px(css`
    padding: 24px 40px 0;
    background-color: ${colors.modalBackgroundColor};
    border-radius: 0px 30px 30px 0px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    width: calc(100% - 120px);
    height: 540px;
  `)}
  ${above1280px(css`
    width: calc(100% - 200px);
    height: 579px;
    flex-direction: row;
    justify-content: center;
  `)}
`;

export const TabWrapper = styled.div`
  background-color: ${colors.inputBorder};
  position: absolute;
  ${above768px(css`
    width: 100%;
    height: auto;
  `)}
`;

export const TransactWrapper = styled.div`
  background-color: ${colors.modalBackgroundColor};

  align-items: center;
  justify-content: center;
  position: absolute;
  ${above768px(css`
    width: 100%;
    height: auto;
  `)}
`;
