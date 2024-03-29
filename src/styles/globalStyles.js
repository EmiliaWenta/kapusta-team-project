import { css } from 'styled-components';

export const colors = {
  modalBackgroundColor: `#FFFFFF`,
  expensesDivider: `#E0E5EB`,
  backgroundColor: `#f6f7fb`,
  brandOrange: `#ff751d`,
  lightOrange: `#FFDAC0`,
  textBasicGray: `#52555F`,
  alertColor: `#EB5757`,
  moneyGreen: `#407946`,
  moneyRed: `#E7192E`,
  iconsBlue: `#071F41`,
  textInputGray: `#C7CCDC`,
  inputBorder: `#F5F6FB`,
  tabActive: `#FEFEFE`,
  tabInactive: `#FAFBFD`,
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

export const below768px = styles => css`
  @media screen and (max-width: 768px) {
    ${styles}
  }
`;
