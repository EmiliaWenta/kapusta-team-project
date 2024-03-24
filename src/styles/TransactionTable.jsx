import styled, { css } from 'styled-components';
import { above1280px, above768px, below768px } from './globalStyles';

export const StyledTableContainer = styled.div`
  max-height: 384px;
  height: auto;
  display: flex;
  overflow-y: auto;
  margin-left: 40px;
  width: calc(100% - 140px);
  position: relative;

  ${above768px(css`
    height: 624px;
  `)}

  ${above1280px(css`
    margin-top: 60px;
  `)}

  ${below768px(css`
    margin-top: 0px;
  `)}
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  height: 100%;
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
  ${below768px(css`
    display: none;
  `)}
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
  ${below768px(css`
    tr {
      td {
        max-width: 100px;
      }
    }
  `)}
`;

export const ColoredTextCell = styled.td`
  color: ${props => (props.value >= 0 ? '#407946' : '#E7192E')};
  font-weight: bold;
`;

export const StyledIconCell = styled.td`
  width: 50px;
  justify-content: 'center';
  display: 'flex';
  alignitems: 'center';
  height: '40px';
`;
