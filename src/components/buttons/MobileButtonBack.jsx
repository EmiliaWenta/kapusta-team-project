import React from 'react';
import BackButton from 'components/buttons/BackButton';
import svg from '../../svg/icons_sprite.svg';

const MobileButtonBack = () => {
  const leftarrowIcon = `${svg}#arrow_back`;
  const buttonText = `  TO TRANSACTION`;
  const iconSize = '9px';
  const addStyles = { color: '#000', fontSize: '10px', fontWeight: 'bold' };

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
          addStyles={addStyles}
          addStylesDiv={addStylesDiv}
          iconSize={iconSize}
        />
      </buttonStyle>
    </div>
  );
};

export default MobileButtonBack;
