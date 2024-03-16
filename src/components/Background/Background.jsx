import React, { useState } from 'react';

import {
  UpCabbage,
  BackgroundContainer,
  DownCabbage,
  ImageWrapper,
  LogImageWrapper,
  LogBackgroundContainer,
  DoubleCabb,
} from '../../styles/background';

const BackgroundTemplate = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      {isLoggedIn ? (
        <LogBackgroundContainer>
          <LogImageWrapper />
          <DoubleCabb />
        </LogBackgroundContainer>
      ) : (
        <BackgroundContainer>
          <ImageWrapper>
            <UpCabbage />
          </ImageWrapper>
          <DownCabbage />
        </BackgroundContainer>
      )}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Wyloguj się' : 'Zaloguj się'}
      </button>
    </>
  );
};

export default BackgroundTemplate;
