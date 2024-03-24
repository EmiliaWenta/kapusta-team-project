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
} from '../../styles/ReportPage/reportButtons';
import { useState } from 'react';
import ReportButtonsData from './ReportButtonsData.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectToken } from '../../redux/selectors';
import { getDetailedReport } from '../../redux/operations';

export function BalanceReport() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handlePrevMonth = () => {
    if (currentMonthIndex === 0) {
      if (currentYearIndex > 0) {
        setCurrentYearIndex(currentYearIndex - 1);
        setCurrentMonthIndex(
          Object.keys(ReportButtonsData[currentYearIndex - 1].months).length - 1
        );
      }
    } else {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    const monthCount = Object.keys(
      ReportButtonsData[currentYearIndex].months
    ).length;
    if (currentMonthIndex === monthCount - 1) {
      if (currentYearIndex < ReportButtonsData.length - 1) {
        setCurrentYearIndex(currentYearIndex + 1);
        setCurrentMonthIndex(0);
      }
    } else {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  useEffect(() => {
    const fetchDataForSelectedDate = async () => {
      try {
        const credentials = {
          year: ReportButtonsData[currentYearIndex].year,
          month: currentMonthIndex + 1,
        };
        await dispatch(getDetailedReport({ token, credentials }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataForSelectedDate();
  }, [dispatch, token, currentYearIndex, currentMonthIndex]);

  const currentYearData = ReportButtonsData[currentYearIndex];
  const currentYear = currentYearData.year;
  const currentMonths = Object.keys(currentYearData.months);
  const currentMonth = currentMonths[currentMonthIndex];

  const isOldestMonth = currentYearIndex === 0 && currentMonthIndex === 0;
  const isNewestMonth =
    currentYearIndex === ReportButtonsData.length - 1 &&
    currentMonthIndex === currentMonths.length - 1;

  return (
    <BalanceContainer>
      <PeriodContainer>
        <DataWrapper>
          <MounthBox>
            <Period>Current period:</Period>
            <MounthContainer>
              {!isOldestMonth && (
                <PeriodBtn type="button" onClick={handlePrevMonth}>
                  <PeriodArrow>
                    <use href={`${svg}#arrow_left`} />
                  </PeriodArrow>
                </PeriodBtn>
              )}

              <PeriodData>{`${currentMonth} ${currentYear}`}</PeriodData>

              {!isNewestMonth && (
                <PeriodBtn type="button" onClick={handleNextMonth}>
                  <PeriodArrow>
                    <use href={`${svg}#arrow_right`} />
                  </PeriodArrow>
                </PeriodBtn>
              )}
            </MounthContainer>
          </MounthBox>
        </DataWrapper>
      </PeriodContainer>
    </BalanceContainer>
  );
}
