import { useState } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';
import { ChartWrapper, ReportBoxWrapper } from 'styles/ReportBox/ReportBox';
import { Chart } from 'components/Chart/Chart.jsx';
import chartData from 'components/Chart/chartData';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);

  const changeComponentVisibility = () => {
    setShowIncome(!showIncome);
  };
  return (
    <div>
      <ReportBoxWrapper>
        {showIncome ? (
          <Income changeComponentVisibility={changeComponentVisibility} />
        ) : (
          <Expenses changeComponentVisibility={changeComponentVisibility} />
        )}
      </ReportBoxWrapper>
      <ChartWrapper>
        <Chart data={chartData} categories={''} />
      </ChartWrapper>
    </div>
  );
}
