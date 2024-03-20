import styled from 'styled-components';
import { above768px } from 'styles/globalStyles';

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
`;

export const BalanceReportBox = styled.div`
  margin: 16px 0px 10px 0px;
  width: 280px;
  display: flex;
  row-gap: 32px;
  flex-direction: column;

  ${above768px`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `};
`;
