import { styled, css } from 'styled-components';
import { above768px } from '../globalStyles';

export const StyledMobileButton = styled.div`
  position: absolute;
  top: 72px;
  left: 22.25px;

  ${above768px(css`
    display: none;
  `)}
`;

// export const StyledDatePic = styled.div`

// `;

export const StyledBalance = styled.div`
  // justify-content: center;
  // padding-lef: 100px;
`;

export const StyledArrBack = styled.div`
  padding: 22px 0 0 23px;

  ${above768px(css`
    display: none;
  `)}
`;
