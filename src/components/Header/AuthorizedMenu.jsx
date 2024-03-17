import { useEffect, useState } from 'react';

import {
  NoMobileExit,
  NoMobileMenu,
  StyledLetter,
  StyledName,
  UserWrapper,
} from '../../styles/Hearder/StyledAuthMenu';
import sprite from '../../svg/icons_sprite.svg';

const AuthorizedMenu = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <UserWrapper>
      <StyledLetter>U</StyledLetter>
      {isMobile ? (
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#logout`} />
        </svg>
      ) : (
        <NoMobileMenu>
          <StyledName>User Name</StyledName>
          <NoMobileExit>Exit</NoMobileExit>
        </NoMobileMenu>
      )}
    </UserWrapper>
  );
};

export default AuthorizedMenu;
