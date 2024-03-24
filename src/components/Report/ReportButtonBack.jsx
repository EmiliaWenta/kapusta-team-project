import React from 'react';
import BackButton from 'components/buttons/BackButton';
import svg from '../../svg/icons_sprite.svg';
import { colors } from 'styles/globalStyles';

const ReportButtonBack = () => {
  const leftarrowIcon = `${svg}#arrow_back`;
  const buttonText = `Main Page`;
  const addStyles = {
    fontSize: '14px',
    lineHeight: '14.06',
    color: `${colors.textBasicGray}B2`,
    marginLeft: '15px',
  };

  const addStylesDiv = {
    display: 'flex',
    alignItems: 'center',
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
