import { useDispatch, useSelector } from 'react-redux';
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
  LoginFormSuccessMessage,
} from '../../styles/loginForm';

import { TomatoButtonWithShadow } from 'components/buttons/TomatoButtonWithShadow';
import { GreyButton } from 'components/buttons/GreyButton';
import { GoogleBtn } from 'components/buttons/GoogleBtn';
import { login, register } from '../../redux/operations';
import {
  selectLoginError,
  selectRegisterError,
  selectRegisterSuccess,
} from '../../redux/selectors';

function LoginForm() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const registerError = useSelector(selectRegisterError);
  const loginError = useSelector(selectLoginError);
  const registerSuccess = useSelector(selectRegisterSuccess);
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
        <LoginFormText>You can log in with your Google Account:</LoginFormText>
        <GoogleBtn />
        <LoginFormBox id="login-form" onSubmit={handleSubmit}>
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
              {registerError && (
                <LoginFormErrorMessage>{registerError}</LoginFormErrorMessage>
              )}
              {loginError && (
                <LoginFormErrorMessage>{loginError}</LoginFormErrorMessage>
              )}
              {registerSuccess && (
                <LoginFormSuccessMessage>
                  Register success!
                </LoginFormSuccessMessage>
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
