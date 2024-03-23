import React from 'react';
import BackButton from 'components/buttons/BackButton';
import svg from '../../svg/icons_sprite.svg';
import { colors } from 'styles/globalStyles';

const ReportButtonBack = () => {
  const leftarrowIcon = `${svg}#arrow_back`;
  const buttonText = `Main Page`;
  const addStyles = {
    'font-size': '14px',
    'line- height': '14.06',
    color: `${colors.textBasicGray}B2`,
    'margin-left': '15px',
  };

  const addStylesDiv = {
    display: 'flex',
    'align-items': 'center',
  };

  return (
    <div>
      <BackButton
        leftArrowIcon={leftarrowIcon}
        buttonText={buttonText}
        addStyles={addStyles}
        addStylesDiv={addStylesDiv}
      ></BackButton>
    </div>
  );
};

export default ReportButtonBack;
