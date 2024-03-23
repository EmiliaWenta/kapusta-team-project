import { styled, css } from 'styled-components';
import { above768px, above1280px } from 'styles/globalStyles';

export const StyledFinance = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BalanceWrapper = styled.div`
  justify-content: center;
  margin-top: 124px;
  margin-left: 20%;
  width: calc(100% - 500px);
  ${above768px(css`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin: 40px 32px 0;
    min-width: 624px;
    width: 100%;
  `)}
  ${above1280px(css`
    width: calc(100% - 200px);
    justify-content: flex-end;
    margin-top: 40px;
  `)}
`;
export const ReportWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: calc(40%);
  ${above768px(css`
    margin-right: 60px;
    position: static;
    justify-content: flex-end;
    padding-top: 10px;
  `)}
  ${above1280px(css`
    margin: 0 106px 0 calc((100% - 360px) / 3);
  `)}
`;
export const TableWrapper = styled.div`
  z-index: 10;
  padding-left: 10px;

  ${above768px(css`
    margin-top: 24px;
    position: absolute;
    top: 40px;

    padding-left: 0;
  `)}
  ${above1280px(css`
    margin-top: 32px;
  `)}
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 20px 32px 0 0;

  ${above768px(css`
    margin: 60px 32px 0;
    flex-direction: row;
  `)}
  ${above1280px(css`
    margin: 8px 91px 0;
  `)}
`;

export const TransactionWrapper = styled.div`
  margin-top: 20px;
  max-width: 100%;

  ${above1280px(css`
    padding-left: 0;
    display: flex;
    // justify-content: space-between;
    flex-direction: row;
    flex-wrap: no-wrap;
  `)}
`;
export const MobileButtonStyled = styled.div`
  padding: 16px 0 0 20px;
  hight: 20px;

  ${above768px(css`
    display: none;
  `)}
`;
