import styled, { css } from 'styled-components';
import { above768px } from './globalStyles';

export const StyledChartContainer = styled.div`
  width: 280px;

  ${above768px(css`
    max-width: 605px;
    overflow-x: auto;
    height: 350px;
  `)}
`;
