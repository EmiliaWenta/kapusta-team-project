import React from 'react';
import BackButton from 'components/buttons/BackButton';
import svg from '../../svg/icons_sprite.svg';

const ArrowBack = () => {
  const leftarrowIcon = `${svg}#arrow_back`;
  const buttonText = ` `;
  const iconSize = '9px';

  const addStylesDiv = {
    left: `10px`,
    display: `flex`,
    alignItems: `center`,
  };

  return (
    <div>
      <buttonStyle>
        <BackButton
          leftArrowIcon={leftarrowIcon}
          buttonText={buttonText}
          addStylesDiv={addStylesDiv}
          iconSize={iconSize}
        />
      </buttonStyle>
    </div>
  );
};

export default ArrowBack;
