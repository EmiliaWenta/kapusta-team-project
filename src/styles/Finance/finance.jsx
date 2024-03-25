import { styled, css } from 'styled-components';
import { above768px, above1280px } from 'styles/globalStyles';

export const StyledFinance = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: auto;
  padding: 13px 20px 12px 20px;
`;

export const BalanceWrapper = styled.div`
  padding-top: 52px;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${above768px(css`
    display: flex;
    flex-wrap: no-wrap;
    padding: 40px 0 0 20px;
    justify-content: space-between;
    min-width: 624px;
    width: 100%;
  `)}
  ${above1280px(css`
    width: calc(100%);
    justify-content: flex-end;
    paddnig: 0;
  `)}
`;
export const ReportWrapper = styled.div`
  position: absolute;
  top: 115px;
  left: 40%;
  ${above768px(css`
    margin-right: 60px;
    top: 0;
    position: static;
    justify-content: flex-end;
    padding-top: 10px;
  `)}
  ${above1280px(css`
    margin-right: 91px;
    margin-left: calc((100% - 960px));
    justify-content: flex-end;
    left: 0;
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
  padding: 0 0 0 20px;
  hight: 20px;

  ${above768px(css`
    display: none;
  `)}
`;
export const BalanceReportWrapper = styled.div``;

export const InputWrapper = styled.div`
  justify-content: center;
`;

export const DateWrapper = styled.div``;

export const StyledDatePic = styled.div``;
