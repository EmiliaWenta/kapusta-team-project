import { css, styled } from 'styled-components';

import { colors, above768px, above1280px } from 'styles/globalStyles';

const { textBasicGray } = colors;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 86px;

  ${above768px(css`
    padding-top: 80px;
  `)}

  ${above1280px(css`
    flex-direction: row;
    gap: 157px;
    justify-content: center;
    padding-left: 69px;
    padding-top: 117px;
    align-items: start;
  `)}
`;

export const StyledWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 280px;
  padding: 0px;

  ${above768px(css`
    width: 426px;
  `)}
  ${above1280px(css`
    gap: 0px;
    width: 377px;
    padding-top: 191px;
  `)}
`;

export const StyledLogo = styled.svg`
  width: 183px;
  height: 46px;
  ${above768px(css`
    width: 306.52px;
    height: 77.69px;
  `)}
  ${above1280px(css`
    width: 377px;
    height: 120px;
  `)}
`;

export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  padding-left: 13px;
  color: ${textBasicGray};

  ${above768px(css`
    font-size: 16px;
    padding-left: 53.5px;
  `)}

  ${above1280px(css`
    padding-left: 72px;
  `)}
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 105px;

  ${above768px(css`
    padding-top: 80px;
    padding-bottom: 155px;
  `)}

  ${above1280px(css`
    padding: 0;
  `)}
`;
