import svg from '../../svg/icons_sprite.svg';
import {
  BalanceContainer,
  PeriodContainer,
  MainPageSvg,
  Period,
  PeriodArrow,
  PeriodData,
  PeriodBtn,
  StyledLink,
  MainPageText,
  MounthBox,
  MounthContainer,
  DataWrapper,
} from '../../styles/reportButtons';

import BalanceReportPage from 'components/ReportPage/BalanceReportPage';

export function BalanceReport() {
  const isWideScreen = window.innerWidth >= 768;
  return (
    <BalanceContainer>
      <PeriodContainer>
        <StyledLink to="/wallet">
          <MainPageSvg>
            <use href={`${svg}#arrow_back`}></use>
          </MainPageSvg>

          <MainPageText>Main Page</MainPageText>
        </StyledLink>
        {isWideScreen && <BalanceReportPage />}
        <DataWrapper>
          <MounthBox>
            <Period>Current period:</Period>
            <MounthContainer>
              <PeriodBtn type="button">
                <PeriodArrow>
                  <use href={`${svg}#arrow_left`} />
                </PeriodArrow>
              </PeriodBtn>

              <PeriodData>Month Year</PeriodData>

              <PeriodBtn type="button">
                <PeriodArrow>
                  <use href={`${svg}#arrow_right`} />
                </PeriodArrow>
              </PeriodBtn>
            </MounthContainer>
          </MounthBox>
        </DataWrapper>
      </PeriodContainer>
    </BalanceContainer>
  );
}
