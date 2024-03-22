import styled from 'styled-components';
import { above1280px, above768px } from 'styles/globalStyles';

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
`;

export const BalanceReportBox = styled.div`
  margin-top: 16px;
  width: 280px;
  display: flex;
  row-gap: 32px;
  flex-direction: column;

  ${above768px`
  width: 704px;
  height: 44px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  `};

  ${above1280px`
  width: 1034px;`}
`;
