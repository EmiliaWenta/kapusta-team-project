import React from 'react';
import BackButton from 'components/buttons/BackButton';
import svg from '../../svg/icons_sprite.svg';

const MobileButtonBack = () => {
  const leftarrowIcon = `${svg}#arrow_back`;
  const buttonText = `  TO TRANSACTION`;

  return (
    <div>
      <buttonStyle>
        <BackButton leftArrowIcon={leftarrowIcon} buttonText={buttonText} />
      </buttonStyle>
    </div>
  );
};

export default MobileButtonBack;
