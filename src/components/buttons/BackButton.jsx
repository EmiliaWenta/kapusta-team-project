import React from 'react';
import { NavLink } from 'react-router-dom';

const BackButton = ({ leftArrowIcon, buttonText, addStyles, addStylesDiv }) => {
  return (
    <NavLink to="/finance" style={{ 'text-decoration': 'none' }}>
      <div style={addStylesDiv}>
        <svg width="18" height="18">
          <use href={leftArrowIcon} />
        </svg>
        <span style={addStyles}>{buttonText}</span>
      </div>
    </NavLink>
  );
};

export default BackButton;
