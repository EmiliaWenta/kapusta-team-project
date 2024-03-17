import styled from 'styled-components';
import { colors, above768px } from './globalStyles';

export const LoginFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.modalBackgroundColor};
`;

export const LoginFormText = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 14px;
`;

export const LoginFormGoogleBtn = styled.button`
  width: 122px;
  height: 40px;
  border-radius: 26px;
  border: none;
  box-shadow: 1px 2px 3px 0px rgba(170, 178, 197, 0.2);
  margin: 15px 0px;

  ${above768px`
  `}
`;
export const LoginFormLabelList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  row-gap: 20px;
`;

export const LoginFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  line-height: 11.72px;
  row-gap: 12px;
  align-items: flex-start;

  ${above768px`
  font-size: 12px;
  line-height: 14.06px;`}
`;

export const LoginFormInput = styled.input`
  background-color: ${colors.backgroundColor};
  width: 200px;
  border-radius: 30px;
  outline: none;
  border: none;
  padding: 17px 19px;
  margin-top: 12px;

  &::placeholder {
    font-size: 14px;
    line-height: 16.41px;
  }

  ${above768px`
  width: 220px;`}
`;
export const LoginFormBtnList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  column-gap: 8px;
  padding: 0px;
`;

export const LoginFormErrorMessage = styled.p`
  font-size: 10px;
  line-height: 11.72px;
  color: red;
  text-align: left;
`;
