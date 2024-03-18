import { styled, css } from 'styled-components';
import { colors, above768px } from '../styles/globalStyles';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & .react-datepicker__day--selected {
    background-color: ${colors.brandOrange};
  }

  & .react-datepicker__day--keyboard-selected {
    background-color: ${colors.lightOrange};
  }

  & .react-datepicker__header {
    background-color: ${colors.backgroundColor};
    border: none;
  }

  & .react-datepicker {
    border: 2px solid gray;
    color: gray;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-35%);

    ${above768px(css`
      left: -30px;
      transform: translateX(0);
    }
    `)}

  & .react-datepicker__day-name {
    color: black;
  }
  &
    .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::after {
    border-bottom-color: gray;
  }

  & .react-datepicker__triangle {
    position: absolute;
    left: 0px;


    ${above768px(css`
      position: absolute;
      margin-top: 15px;
      left: 0px;
    }
    `)}


  & .react-datepicker__month-container {
    color: black;
    background-color: ${colors.modalBackgroundColor};
  }

  & .react-datepicker__day {
    color: black;

    &--disabled {
      color: ${colors.textBasicGray};
    }
  }

  & .react-datepicker__current-month {
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.15;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: black;
  }

  & .react-datepicker__day--selected:hover,
  & .react-datepicker__day--selected:focus {
    background-color: gray;
  }

  & .react-datepicker-wrapper {
    width: 100%;
  }

  & .date {
    background-color: transparent;
    height: 40px;
    width: 74px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 1.15;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    outline: #ff751d;
    color: ${colors.textBasicGray};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & svg {
    fill: ${colors.textBasicGray};
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    fill: ${colors.brandOrange};
  }
`;
