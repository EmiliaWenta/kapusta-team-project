import { useGoogleLogin } from '@react-oauth/google';
import { LoginFormGoogleBtn } from 'styles/loginForm';
import googleLogo from '../../svg/icons_sprite.svg';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../redux/operations.js';

export const GoogleBtn = () => {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: async response => {
      try {
        await dispatch(loginGoogle(response.access_token));
      } catch (error) {
        console.log('Login Failed', error);
      }
    },
  });

  return (
    <LoginFormGoogleBtn onClick={login}>
      <svg width="17.17px" height="18px">
        <use xlinkHref={`${googleLogo}#googleLogo`} />
      </svg>
      Google
    </LoginFormGoogleBtn>
  );
};
