import { useState } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';
import { ChartWrapper, ReportBoxWrapper } from 'styles/ReportBox/ReportBox';
import { Chart } from 'components/Chart/Chart.jsx';
import { useSelector } from 'react-redux';
import {
  selectDetailedExpenses,
  selectDetailedIncome,
} from '../../redux/selectors';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);
  const expenseData = useSelector(selectDetailedExpenses);
  const incomeData = useSelector(selectDetailedIncome);

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
        <Chart data={showIncome ? incomeData : expenseData} categories={''} />
      </ChartWrapper>
    </div>
  );
}
