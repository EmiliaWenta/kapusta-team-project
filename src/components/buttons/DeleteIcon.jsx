import { StyledButtonSvg, StyledSvg } from '../../styles/button.jsx';
import sprite from '../../svg/icons_sprite.svg';

export const DeleteIcon = () => {
  return (
    <StyledButtonSvg type="button">
      <StyledSvg width="18" height="18">
        <use href={sprite + `#delete`}></use>
      </StyledSvg>
    </StyledButtonSvg>
  );
};
