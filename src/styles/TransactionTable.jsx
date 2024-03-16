import styled, { css } from 'styled-components';
import { above1280px } from './globalStyles';

export const StyledTableContainer = styled.div`
  max-height: 384px;
  overflow-y: auto;
  width: 624px;
  position: relative;
  ${above1280px(css`
    width: 746px;
  `)}
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
`;

export const StyledTableHeader = styled.thead`
  background-color: #f5f6fb;
  height: 40px;
  font-weight: bold;
  position: sticky;
  top: 0;
  :first-child {
    border-top-left-radius: 16px;
  }
  :last-child {
    border-top-right-radius: 16px;
  }
`;

export const StyledTableBody = styled.tbody`
  background-color: #ffffff;
  border-left: 2px solid #f5f6fb;
  border-right: 2px solid #f5f6fb;

  tr {
    border-bottom: 2px solid #f5f6fb;
    height: 40px;
    text-align: center;
    td {
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 170px;
    }
  }
`;

export const ColoredTextCell = styled.td`
  color: ${props => (props.value >= 0 ? '#407946' : '#E7192E')};
  font-weight: bold;
`;

export const StyledIconCell = styled.td`
  width: '50px';
  justify-content: 'center';
  display: 'flex';
  alignitems: 'center';
  height: '40px';
`;

