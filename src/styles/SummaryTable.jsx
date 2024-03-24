import styled, { css } from 'styled-components';
import { above1280px, above768px } from './globalStyles';

export const StyledTable = styled.table`
  width: 230px;
  border-collapse: collapse;
  font-size: 12px;
  max-height: 280px;
  ${above768px(css`
    margin: 40px 0 60px 0;
  `)} ${above1280px(css`
    max-width: 213px;
    margin: 60px 0 0 74px;
  `)};
`;

export const StyledTableHeader = styled.thead`
  background-color: #f5f6fb;
  height: 38px;
  font-weight: bold;

  :first-child {
    border-top-left-radius: 16px;
  }
  :last-child {
    border-top-right-radius: 16px;
  }
`;

export const StyledTableBody = styled.tbody`
  border-left: 2px solid #f5f6fb;
  border-right: 2px solid #f5f6fb;
  :first-child {
    border-top: 2px solid #fff;
  }

  tr {
    border-bottom: 2px solid #fff;
    max-height: 38px;
    text-align: center;
    background-color: #f5f6fb;
    :first-child {
      text-align: left;
      padding-left: 22px;
      ${above1280px(css`
        padding-left: 12px;
        max-height: 38px;
      `)}
    }
    :last-child {
      text-align: right;
      padding-right: 22px;
      ${above1280px(css`
        padding-right: 12px;
        max-height: 38px;
      `)}
    }
    td {
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 170px;
      height: 38px;
      ${above1280px(css`
        max-height: 38px;
      `)}
    }
  }
`;
