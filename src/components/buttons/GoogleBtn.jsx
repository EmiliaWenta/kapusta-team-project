import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { LoginFormGoogleBtn } from 'styles/loginForm';
import googleLogo from '../../svg/icons_sprite.svg';

export const GoogleBtn = () => {
  const login = useGoogleLogin({
    onSucess: async response => {
      try {
        const res = await axios.post(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    onFail: response => {
      console.log(response.error);
    },
  });
  return (
    <LoginFormGoogleBtn onClick={() => login()}>
      <svg width="17.17px" height="18px">
        <use xlinkHref={`${googleLogo}#googleLogo`} />
      </svg>
      Google
    </LoginFormGoogleBtn>
  );
};
