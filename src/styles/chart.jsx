import styled, { css } from 'styled-components';
import { above768px } from './globalStyles';

export const StyledChartContainer = styled.div`
  overflow-y: auto;
  height: 900px;
  box-sizing: border-box;
  width: 280px;

  ${above768px(css`
    overflow-x: auto;
    width: 1000px;
    height: 400px;
  `)}
`;

export const StyledDiv = styled.div`
  height: 490px;
  overflow: auto;
  width: 300px;
  ${above768px(css`
    width: 690px;
    overflow: auto;
    height: 420px;
  `)}
`;
