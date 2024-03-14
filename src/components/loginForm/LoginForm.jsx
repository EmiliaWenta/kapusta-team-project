import React, { useState } from 'react';
import ModalWindow from 'components/modalWindow/ModalWindow';
import {
  LoginFormBox,
  LoginFormText,
  LoginFormGoogleBtn,
  LoginFormLabelList,
  LoginFormLabel,
  LoginFormInput,
  LoginFormBtnList,
  LoginFormErrorMessage,
} from '../../styles/loginForm';

import { TomatoButtonWithShadow } from 'components/buttons/TomatoButtonWithShadow';
import { GreyButton } from 'components/buttons/GreyButton';

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
                <LoginFormErrorMessage>
                  This is a required field.
                </LoginFormErrorMessage>
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
                <LoginFormErrorMessage>
                  This is a required field.
                </LoginFormErrorMessage>
              )}
            </li>
          </LoginFormLabelList>
          <LoginFormBtnList>
            <li>
              <TomatoButtonWithShadow text="log in" />
            </li>
            <li>
              <GreyButton text="registration" />
            </li>
          </LoginFormBtnList>
        </LoginFormBox>
      </ModalWindow>
    </div>
  );
}

export default LoginForm;
