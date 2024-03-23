import React from 'react';

const BackButton = ({ leftArrowIcon, buttonText, addStyles, addStylesDiv }) => {
  return (
    <div style={addStylesDiv}>
      <svg width="18" height="18">
        <use href={leftArrowIcon} />
      </svg>
      <span style={addStyles}>{buttonText}</span>
    </div>
  );
};

export default BackButton;
