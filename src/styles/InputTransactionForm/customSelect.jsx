import Select from 'react-select';
import { css, styled } from 'styled-components';
import { above768px, colors } from 'styles/globalStyles';

export const CustomSelectStyled = styled(Select)`
  & .react-select__control {
    box-sizing: border-box;
    min-width: 168px;
    height: 44px;
    background-color: ${colors.modalBackgroundColor};
    color: ${colors.textInputGray};
    font-size: 12px;
    box-shadow: none;
    font-weight: 400;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.15;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    text-align: start;
    padding-left: 20px;
    border-radius: 0 0 0 16px;
    border: none;

    &:hover {
      border: 2px solid ${colors.textBasicGray};
    }

    &--is-focused {
      border: 2px solid ${colors.textBasicGray};
    }

    ${above768px(css`
      border-radius: 0;
      height: 40px;
      width: 100%;
      min-width: 168px;
    `)}
  }

  & .react-select__input {
    color: ${colors.textInputGray};
  }

  & .react-select__placeholder {
    color: ${colors.textInputGray};
  }

  & .react-select__menu {
    box-sizing: border-box;
    position: absolute;
    top: 33px;
    min-width: 168px;
    background-color: ${colors.modalBackgroundColor};
    z-index: 200;
    border: 1px solid ${colors.inputBorder};
    box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  }

  & .react-select__value-container {
    padding: 0;
  }

  & .react-select__single-value {
    color: ${colors.textInputGray};
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__dropdown-indicator {
    & svg {
      fill: ${colors.textInputGray};
    }

    &:focus svg {
      fill: ${colors.textBasicGray};
      transform: rotate(180deg);
    }
  }

  & .react-select__option {
    height: 32px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    font-size: 12px;
    box-shadow: none;
    font-weight: 400;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.15;
    letter-spacing: 0.02em;
    color: ${colors.textInputGray};
    background-color: white;

    &:disabled {
      cursor: not-allowed;
    }

    &--is-focused {
      cursor: default;
      background-color: ${colors.backgroundColor};
      color: ${colors.textBasicGray};
    }
  }
`;
