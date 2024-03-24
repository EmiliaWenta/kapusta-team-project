import React from 'react';
import { Navigate } from 'react-router-dom';
import sprite from '../../svg/icons_sprite.svg';

const MobileButton = ({ buttonText, destination }) => {
  const handleButtonClick = () => {
    Navigate(destination);
  };

  return (
    <div
      style={{ left: '10px', display: 'flex', alignItems: 'center' }}
      onClick={handleButtonClick}
    >
      <svg width="13px" height="13px">
        <use href={sprite + `#arrow_back`}></use>
      </svg>
      <span style={{ color: '#ff751d', fontSize: '10px', fontWeight: 'bold' }}>
        {buttonText}
      </span>
    </div>
  );
};

export default MobileButton;
