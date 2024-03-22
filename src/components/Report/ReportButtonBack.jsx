import React from 'react';
import BackButton from 'components/buttons/BackButton';
import svg from '../../svg/icons_sprite.svg';

const ReportButtonBack = () => {
  const leftarrowIcon = `${svg}#arrow_back`;
  const buttonText = `Main Page`;

  return (
    <div>
      <BackButton leftArrowIcon={leftarrowIcon} buttonText={buttonText} />
    </div>
  );
};

export default ReportButtonBack;
