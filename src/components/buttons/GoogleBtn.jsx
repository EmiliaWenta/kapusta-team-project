import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { LoginFormGoogleBtn } from 'styles/loginForm';
import googleLogo from '../../svg/icons_sprite.svg';

export const GoogleBtn = () => {
  const login = useGoogleLogin({
    onSuccess: async response => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log('Login Success', res.data);
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
