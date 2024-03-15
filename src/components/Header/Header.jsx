import { StyledWrapper } from '../../styles/Hearder/StyledHeader';

import AuthorizedMenu from './AuthorizedMenu';
import sprite from '../../svg/icons_sprite.svg';

const Header = () => {
  const isLoggedIn = true;
  return (
    <StyledWrapper>
      <svg width="90" height="31">
        <use xlinkHref={`${sprite}#header-logo`} />
      </svg>
      {isLoggedIn && <AuthorizedMenu></AuthorizedMenu>}
    </StyledWrapper>
  );
};

export default Header;
