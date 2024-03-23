import styled, { css } from 'styled-components';
import { above768px, above1280px } from './globalStyles';

export const StyledForm = styled.form`
  min-width: 282px;
  height: 72px;
  aign-items: center;
  text-align: center;

  ${above768px(css`
    width: 369px;
    height: 44px;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
  `)}

  ${above1280px(css`
    width: 334px;
    gap: 16px;
  `)}
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: rgba(82, 85, 95, 0.7);

  ${above768px(css`
    margin-left: 40px;
    margin-right: 6px;
  `)}
  ${above1280px(css`
    margin-left: 0px;
    margin-right: 4px;
  `)}
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 140px;
  height: 44px;
  border: 2px solid #ffffff;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  background-color: #f5f6fb;
  color: #000000;
  padding-right: 16px;
  text-align: end;
  border-radius: 22px 0px 0px 22px;

  &::placeholder {
    color: #000000;
  }

  ${above768px(css`
    width: 125px;
    padding-right: 20px;
    border-radius: 22px;
  `)}
`;
