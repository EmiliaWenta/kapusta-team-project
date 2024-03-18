import { css, styled } from 'styled-components';
import { above1280px, above768px, colors } from 'styles/globalStyles';

export const MainContainer = styled.div`
  box-sizing: border-box;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  ${above768px(css`
    width: 100%;
    justify-content: center;
    /* background-color: white; */
    border-bottom-left-radius: 0;
    margin-bottom: 48px;
  `)}

  ${above1280px(css`
    flex-wrap: nowrap;
    min-width: 1034px;
    height: 44px;
    margin-bottom: 0;
  `)}
`;

export const InputForm = styled.form`
  display: ${p => (p.isShown ? 'flex' : 'none')};
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 280px;

  ${above768px(css`
    display: flex;
    flex-direction: row;
    row-gap: 34px;
    column-gap: 34px;
  `)}

  ${above1280px(css`
    height: 44px;
    display: inline-flex;
    flex-wrap: nowrap;
    column-gap: 32px;
    min-width: 1034px;
  `)}
`;

export const InputGroupWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  ${above768px(css`
    flex-direction: row;
    flex-wrap: nowrap;
    height: 44px;
    width: 478px;
    border: 2px solid ${colors.inputBorder};
    border-radius: 16px 16px 16px 0;
  `)}

  ${above1280px(css`
    display: flex;
    flex-wrap: nowrap;
    width: 578px;
    height: 44px;
    border-radius: 16px 16px 16px 0;
  `)}
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 44px;
  background-color: ${colors.modalBackgroundColor};
  border: 2px solid ${colors.inputBorder};
  font-family: inherit;
  font-size: 12px;
  outline: none;

  /* &:focus {
    border: 2px solid ${colors.textBasicGray} ;
    background-color: white;
  } */

  ::placeholder {
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    color: ${colors.inputBorder};
  }

  ${above768px(css`
    height: 40px;
    border: none;
    background-color: white;
  `)}
`;

export const SelectWrapper = styled.div`
  ${above768px(css`
    border-left: 2px solid ${colors.inputBorder};
    border-right: 2px solid ${colors.inputBorder};
  `)}
`;

export const InputProduct = styled(Input)`
  width: 280px;
  font-family: inherit;
  font-size: 12px;
  padding-left: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: black;
  /* color: white; */

  &::placeholder {
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    color: ${colors.textInputGray};
  }

  &:focus {
    border: 2px solid ${colors.textBasicGray};
    background-color: white;
  }

  ${above768px(css`
    width: 200px;
    border-top-left-radius: 16px;
    border-top-right-radius: 0;
  `)}
  ${above1280px(css`
    width: 290px;
  `)}
`;

export const SelectAmountWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  width: 280px;
  justify-content: center;
  margin-bottom: 12px;

  ${above768px(css`
    width: fit-content;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 0;
    margin: 12px 0;
  `)}
`;

export const InputAmountWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  border-radius: 0 0 16px 0;

  & svg {
    position: absolute;
    top: 11px;
    right: 16px;
    fill: ${colors.textBasicGray};
    transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    fill: orange;
  }

  ${above768px(css`
    margin-left: auto;
    margin-right: auto;
    border-radius: 0 16px 16px 0;
  `)}
`;

export const InputAmount = styled(Input)`
  width: 100%;
  text-align: right;
  padding-right: 42px;
  background-color: ${colors.modalBackgroundColor};
  border-radius: 0 0 16px 0;
  color: black;

  &::placeholder {
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    color: ${colors.textInputGray};
  }

  &:focus {
    color: black;
    border: 2px solid ${colors.textBasicGray};
  }
  ${above768px(css`
    flex-shrink: 0;
    width: 110px;
    border-radius: 0 16px 16px 0;
  `)}
`;

export const ButtonsWrapper = styled.div`
  display: inline-flex;
  column-gap: 16px;
`;
