import {
  LoginWrapper,
  StyledHome,
  StyledLogo,
  StyledTitle,
  StyledWrapper,
} from 'styles/Home/StyledHome';

import LoginForm from 'components/loginForm/LoginForm';
import sprite from '../svg/icons_sprite.svg';

const Home = () => {
  return (
    <StyledHome>
      <StyledWrapper>
        <StyledLogo>
          <use xlinkHref={`${sprite}#kapusta-logo`} />
        </StyledLogo>
        <StyledTitle>SMART FINANCE</StyledTitle>
      </StyledWrapper>
      <LoginWrapper>
        <LoginForm></LoginForm>
      </LoginWrapper>
    </StyledHome>
  );
};

export default Home;
