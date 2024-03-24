import React from 'react';
import { NavLink } from 'react-router-dom';

const BackButton = ({
  leftArrowIcon,
  buttonText,
  addStyles,
  addStylesDiv,
  iconSize,
}) => {
  return (
    <NavLink to="/finance" style={{ textDecoration: 'none' }}>
      <div style={addStylesDiv}>
        <svg width={iconSize} height={iconSize}>
          <use href={leftArrowIcon} />
        </svg>
        <span style={addStyles}>{buttonText}</span>
      </div>
    </NavLink>
  );
};

export default BackButton;
