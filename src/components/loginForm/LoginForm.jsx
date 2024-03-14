import React, { useState } from 'react';
import ModalWindow from 'components/modalWindow/ModalWindow';
import { above768px, colors } from 'styles/globalStyles';
import styled from 'styled-components';
import { StyledTomatoButtonWithShadow, StyledGreyButton } from 'styles/button';

const LoginFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${colors.modalBackgroundColor};
`;

const LoginFormText = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 14px;
`;

const LoginFormGoogleBtn = styled.button`
  width: 122px;
  height: 40px;
  border-radius: 26px;
  border: none;
  box-shadow: 1px 2px 3px 0px rgba(170, 178, 197, 0.2);
  margin: 16px 0px 32px 0px;
`;
const LoginFormLabelList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  row-gap: 20px;
`;

const LoginFormLabel = styled.label`
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

const LoginFormInput = styled.input`
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
const LoginFormBtnList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  column-gap: 8px;
  padding: 0px;
`;

const CustomStyledGreyButton = styled(StyledGreyButton)`
  font-weight: 700;
  font-size: 12px;
`;

const CustomStyledTomatoWithShadowBtn = styled(StyledTomatoButtonWithShadow)`
  font-weight: 700;
  font-size: 12px;
`;
// .message-invisible {
//   display: none;
// }
// .message-visible {
//   display: block;
//   font-size: 10px;
//   line-height: 11.72px;
//   color: red;
//   text-align: left;
// }

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (email === '' || password === '') {
      setEmailError(true);
      setPasswordError(true);
    } else {
      setEmailError(false);
      setPasswordError(false);
    }
  }

  return (
    <div>
      <ModalWindow>
        <LoginFormBox id="login-form" onSubmit={handleSubmit}>
          <LoginFormText>
            You can log in with your Google Account:
          </LoginFormText>
          <LoginFormGoogleBtn>Google</LoginFormGoogleBtn>
          <LoginFormText>
            Or log in using an email and password, after registering:
          </LoginFormText>
          <LoginFormLabelList>
            <li>
              <LoginFormLabel>Email:</LoginFormLabel>
              <LoginFormInput
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
              {emailError && (
                <div className="message-visible">This is a required field.</div>
              )}
            </li>
            <li>
              <LoginFormLabel>Password:</LoginFormLabel>
              <LoginFormInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
              />
              {passwordError && (
                <div className="message-visible">This is a required field.</div>
              )}
            </li>
          </LoginFormLabelList>
          <LoginFormBtnList>
            <li>
              <CustomStyledTomatoWithShadowBtn type="submit">
                log in
              </CustomStyledTomatoWithShadowBtn>
            </li>
            <li>
              <CustomStyledGreyButton>registration</CustomStyledGreyButton>
            </li>
          </LoginFormBtnList>
        </LoginFormBox>
      </ModalWindow>
    </div>
  );
}

export default LoginForm;
