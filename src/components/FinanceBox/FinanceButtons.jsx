import React from 'react';
import sprite from '../../svg/icons_sprite.svg';

const MobileButtonBack = ({ buttonText, navigate, path }) => {
  return (
    <button
      type="button"
      onClick={() => navigate(path)}
      style={{
        color: '#000',
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        border: 'none',
        fontSize: '12px',
      }}
    >
      <svg width="13" height="13">
        <use href={sprite + `#arrow_back`}></use>
      </svg>{' '}
      {buttonText}
    </button>
  );
};

const ArrowBack = ({ navigate, path }) => {
  return (
    <button
      type="button"
      onClick={() => navigate(path)}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <svg width="18" height="18">
        <use href={sprite + `#arrow_back`}></use>
      </svg>{' '}
    </button>
  );
};
export { MobileButtonBack, ArrowBack };
