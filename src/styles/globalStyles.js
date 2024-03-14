import { css } from 'styled-components';

export const colors = {
  modalBackgroundColor: `#FFFFFF`,
  backgroundColor: `#f6f7fb`,
  brandOrange: `#ff751d`,
  lightOrange: `#FFDAC0`,
  textBasicGray: `#52555F`,
  alertColor: `#EB5757`,
  moneyGreen: `#407946`,
  moneyRed: `#E7192E`,
  iconsBlue: `#071F41`,
};

export const above768px = styles => css`
  @media screen and (min-width: 768px) {
    ${styles}
  }
`;

export const above1280px = styles => css`
  @media screen and (min-width: 1280px) {
    ${styles}
  }
`;
