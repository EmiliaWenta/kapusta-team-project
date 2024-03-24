import React from 'react';
import MobileButton from 'components/buttons/MobileButtonBack';

const MobileButtonBack = () => {
  return (
    <MobileButton
      buttonText="To Transaction"
      destination="/path/to/components/InputWrapper"
    />
  );
};

const ArrowBack = () => {
  return (
    <MobileButton
      buttonText="To Transaction"
      destination="/path/to/components/BalanceWrapper"
    />
  );
};

export { MobileButtonBack, ArrowBack };
