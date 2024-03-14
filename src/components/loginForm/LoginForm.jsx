import React, { useState } from 'react';
import ModalBox from 'components/modalWindow/ModalWindow';
import {
  LoginFormBox,
  LoginFormText,
  LoginFormGoogleBtn,
  LoginFormLabelList,
  LoginFormLabel,
  LoginFormInput,
  LoginFormBtnList,
  CustomStyledGreyButton,
  CustomStyledTomatoWithShadowBtn,
} from '../../styles/loginForm';

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
      <ModalBox>
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
      </ModalBox>
    </div>
  );
}

export default LoginForm;
