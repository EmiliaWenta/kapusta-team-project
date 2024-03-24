import { css, styled } from 'styled-components';
import { above1280px, above768px, colors } from './globalStyles';

export const AlertWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 70%;
  left: 2%;
  ${above768px(css`
    top: 130%;
    left: 40%;
    z-index: 90;
  `)};
  ${above1280px(css`
    left: 25%;
  `)};
`;

export const AlertWindow = styled.div`
  display: block;
  position: absolute;
  box-sizing: border-box;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  padding: 29px 29.59px;
  border-radius: 30px;
  //   opacity: 0;
  max-width: 280px;
  height: 163px;

  ${above1280px(css`
    min-height: 152px;
    width: 288px;
  `)};
`;

export const Triangle = styled.div`
  position: absolute;
  top: -11px;
  left: 46.36px;
  height: 12px;
  width: 26px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  clip-path: polygon(100% 100%, 0 100%, 50% 0);
`;
export const AlertText = styled.p`
  font-size: 14px;
  line-height: 1.43;
  text-align: left;
  color: ${colors.modalBackgroundColor};
  margin: 0;
  margin-bottom: 20px;
`;

export const AlertSubText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: ${colors.modalBackgroundColor};
  margin: 0;
`;
