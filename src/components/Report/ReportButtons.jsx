import svg from '../../svg/icons_sprite.svg';
import {
  BalanceContainer,
  PeriodContainer,
  Period,
  PeriodArrow,
  PeriodData,
  PeriodBtn,
  MounthBox,
  MounthContainer,
  DataWrapper,
} from '../../styles/reportButtons';

export function BalanceReport() {
  return (
    <BalanceContainer>
      <PeriodContainer>
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
