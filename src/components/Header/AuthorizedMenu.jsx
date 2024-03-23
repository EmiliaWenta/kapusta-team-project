import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken, selectUserEmail } from '../../redux/selectors';

import {
  NoMobileExit,
  NoMobileMenu,
  NoStyledButton,
  StyledLetter,
  StyledName,
  UserWrapper,
} from '../../styles/Hearder/StyledAuthMenu';
import sprite from '../../svg/icons_sprite.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/operations';
import { NavLink } from 'react-router-dom';

const AuthorizedMenu = () => {
  const [isMobile, setIsMobile] = useState();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const email = useSelector(selectUserEmail);
  const firstLetter = email[0].toUpperCase();

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

  const handleExit = () => {
    dispatch(logout(token));
  };

  return (
    <UserWrapper>
      <StyledLetter>{firstLetter}</StyledLetter>
      {isMobile ? (
        <NavLink to="/home">
          <NoStyledButton onClick={handleExit}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#logout`} />
            </svg>
          </NoStyledButton>
        </NavLink>
      ) : (
        <NoMobileMenu>
          <StyledName>{email}</StyledName>
          <NoMobileExit onClick={handleExit}>Exit</NoMobileExit>
        </NoMobileMenu>
      )}
    </UserWrapper>
  );
};

export default AuthorizedMenu;
