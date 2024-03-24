import React from 'react';
import { NavLink } from 'react-router-dom';

const ForwardButton = ({
  rightArrowIcon,
  buttonText,
  addStyles,
  addStylesDiv,
  iconSize,
}) => {
  return (
    <NavLink to="/balance" style={{ textDecoration: 'none' }}>
      <div style={addStylesDiv}>
        <svg width="18" height="18">
          <use href={rightArrowIcon} />
        </svg>
        <span style={addStyles}>{buttonText}</span>
      </div>
    </NavLink>
  );
};

export default ForwardButton;
