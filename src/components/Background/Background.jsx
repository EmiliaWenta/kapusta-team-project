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
  const [isLoggedIn] = useState(false);

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
    </>
  );
};

export default BackgroundTemplate;
