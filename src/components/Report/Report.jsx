import sprite from '../../svg/icons_sprite.svg';
import { StyledLink, StyledSvg } from '../../styles/reports';

export const Report = () => {
  return (
    <StyledLink to="/reports">
      <p>Reports</p>
      <StyledSvg width="14" height="14">
        <use href={sprite + `#reports`}></use>
      </StyledSvg>
    </StyledLink>
  );
};
