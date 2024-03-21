import React from 'react';

const BackButton = ({ leftArrowIcon, buttonText }) => {
  return (
    <div>
      <svg width="18" height="18">
        <use href={leftArrowIcon} />
      </svg>
      <span>{buttonText}</span>
    </div>
  );
};

export default BackButton;
