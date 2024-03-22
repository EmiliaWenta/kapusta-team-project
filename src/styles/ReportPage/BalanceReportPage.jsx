import styled, { css } from 'styled-components';
import { above768px, above1280px } from 'styles/globalStyles';

export const StyledForm = styled.form`
  width: 280px;
  height: 72px;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
  ${above768px(css`
    display: flex;
    gap: 15px;
    margin: 0px;
  `)} ${above1280px(css`
    width: 334px;
    gap: 16px;
    margin-left: 143px;
  `)};
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  width: 183px;
  height: 44px;
  border: 2px solid #ffffff;
  font-weight: 600;
  font-size: 12px;
  outline: none;
  background-color: #f5f6fb;
  color: #000000;
  text-align: center;
  border-radius: 22px;

  &::placeholder {
    color: #000000;
  }

  ${above768px(css`
    width: 125px;
    border-radius: 22px;
  `)}
`;
