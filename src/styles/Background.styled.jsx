import styled from 'styled-components';
import BgCabbage from '../images/home_bg.png';
import CabbageUp from '../images/home_bg_mobile.png';
import CabbageDown from '../images/single_cabbage.png';
import DoubleCabbage from '../images/double_cabbage.png';

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;
export const UpCabbage = styled.div`
  background-image: url(${CabbageUp});
  position: absolute;
  top: 15em;
  right: -5%;
  width: 83px;
  height: 89px;
  background-repeat: no-repeat;

  @media (min-width: 772px) {
    width: 100%;
    height: 100%;
    top: 7em;
    background-image: url(${BgCabbage});
  }
  @media (min-width: 1280px) {
    left: 0;
    right: 0;
  }
`;
export const DownCabbage = styled.div`
  background-image: url(${CabbageDown});
  position: absolute;
  bottom: 0;
  left: 3em;
  width: 83px;
  height: 89px;
  background-repeat: no-repeat;
  z-index: 1;

  @media (min-width: 772px) {
    width: 100%;
    height: 142px;
    bottom: 4em;
    left: 13%;
    background-image: url(${DoubleCabbage});
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: #f5f6fb;
  z-index: -1000;
  border-bottom-left-radius: 125px;

  @media (min-width: 772px) {
    height: 582px;
  }
`;
