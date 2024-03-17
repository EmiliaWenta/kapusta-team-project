import sprite from '../../svg/icons_sprite.svg';
import { StyledDiv, StyledSvg } from '../../styles/reports';

export const Report = () => {
  return (
    <StyledDiv>
      <p>Reports</p>
      <StyledSvg width="14" height="14">
        <use href={sprite + `#reports`}></use>
      </StyledSvg>
    </StyledDiv>
  );
};
