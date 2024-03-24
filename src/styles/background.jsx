import { css, styled } from 'styled-components';
import BgCabbage from '../images/home_bg.png';
import CabbageUp from '../images/home_bg_mobile.png';
import CabbageDown from '../images/single_cabbage.png';
import DoubleCabbage from '../images/double_cabbage.png';
import WalletBgr from '../images/Banner.png';
import BgDoubleCab from '../images/double_cabbage.png';

import { colors, above768px, above1280px } from './globalStyles';

export const BackgroundContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 856px;
  top: 0;
  left: 0;
  z-index: -99;
  ${above768px(css`
    height: 1024px;
  `)}

  ${above1280px(css`
    height: 850px;
  `)}
`;
export const UpCabbage = styled.div`
  background-image: url(${CabbageUp});
  position: absolute;
  top: 160px;
  right: -34px;
  width: 83px;
  height: 89px;
  background-repeat: no-repeat;

  ${above768px(css`
    width: 100%;
    height: 100%;
    top: 84px;
    left: 10px;
    background-image: url(${BgCabbage});
  `)}

    ${above1280px(css`
      top: 84.5px;
      left: calc(100vw - 1270px);
    `)}
  }
`;
export const DownCabbage = styled.div`
  background-image: url(${CabbageDown});
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 3em;
  width: 83px;
  height: 89px;
  background-repeat: no-repeat;
  z-index: 1;

  ${above768px(css`
    height: 142px;
    bottom: 56px;
    left: 103px;
    width: 183px;
    background-image: url(${DoubleCabbage});
  `)}

  ${above1280px(css`
    left: 230px;
    bottom: 50px;
  `)}
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-color: ${colors.backgroundColor};
  z-index: -1000;
  border-bottom-left-radius: 125px;

  ${above768px(css`
    height: 582px;
  `)}
`;
export const LogBackgroundContainer = styled.main`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 856px;
  top: 0;
  left: 0;
  z-index: -99;

  ${above768px(css`
    height: 1024px;
  `)}
`;

export const LogImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 352px;
  background-color: ${colors.backgroundColor};
  z-index: -1000;
  border-bottom-left-radius: 125px;

  ${above768px(css`
    height: 583px;
  `)}
`;

export const DoubleCabb = styled.div`
  ${above768px(css`
    position: absolute;
    width: 183px;
    height: 146px;
    bottom: 30px;
    right: 80px;
    background-image: url(${BgDoubleCab});
    background-repeat: no-repeat;
  `)}

  ${above1280px(css`
    z-index: -1;
    bottom: 0;
    right: 0;
    background-image: url(${WalletBgr});
    background-repeat: repeat-x;
    width: calc(100% - 1px);
    height: 29%;
  `)}
`;
