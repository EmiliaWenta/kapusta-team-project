import { useDispatch } from 'react-redux';
import { useState } from 'react';

import ModalWindow from 'components/modalWindow/ModalWindow';
import {
  LoginFormBox,
  LoginFormText,
  LoginFormLabelList,
  LoginFormLabel,
  LoginFormInput,
  LoginFormBtnList,
  LoginFormErrorMessage,
} from '../../styles/loginForm';

import { TomatoButtonWithShadow } from 'components/buttons/TomatoButtonWithShadow';
import { GreyButton } from 'components/buttons/GreyButton';
import { GoogleBtn } from 'components/buttons/GoogleBtn';
import { login, register } from '../../redux/operations';

function LoginForm() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();
  let typeOfOperation;

  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (userData.email === '' || userData.password === '') {
      setEmailError(true);
      setPasswordError(true);
      return;
    }

    setEmailError(false);
    setPasswordError(false);

    if (typeOfOperation === 'register') {
      dispatch(register(userData));
    } else {
      dispatch(login(userData));
    }
  }

  return (
    <div>
      <ModalWindow>
        <LoginFormBox id="login-form" onSubmit={handleSubmit}>
          <LoginFormText>
            You can log in with your Google Account:
          </LoginFormText>
          <GoogleBtn />
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
              <TomatoButtonWithShadow
                type="submit"
                text="log in"
                onClick={() => {
                  typeOfOperation = 'login';
                }}
              />
            </li>
            <li>
              <GreyButton
                type="submit"
                text="registration"
                onClick={() => {
                  typeOfOperation = 'register';
                }}
              />
            </li>
          </LoginFormBtnList>
        </LoginFormBox>
      </ModalWindow>
    </div>
  );
}

export default LoginForm;
