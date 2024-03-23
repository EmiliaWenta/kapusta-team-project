import React from 'react';
import { NavLink } from 'react-router-dom';

const BackButton = ({ leftArrowIcon, buttonText }) => {
  return (
    <NavLink to="/finance">
      <svg width="18" height="18">
        <use href={leftArrowIcon} />
      </svg>
      <span>{buttonText}</span>
    </NavLink>
  );
};

export default BackButton;
