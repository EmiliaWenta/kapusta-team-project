import { useState, useEffect } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';
import { ChartWrapper, ReportBoxWrapper } from 'styles/ReportBox/ReportBox';
import { Chart } from 'components/Chart/Chart.jsx';
import { useSelector } from 'react-redux';
import {
  selectExpenses,
  selectIncome,
  selectCurrentYear,
  selectCurrentMonth,
  selectCategoryData,
} from '../../redux/selectors';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentYear, setCurrentYear] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0);

  const expenseData = useSelector(selectExpenses);
  const incomeData = useSelector(selectIncome);
  const storeCurrentYear = useSelector(selectCurrentYear);
  const storeCurrentMonth = useSelector(selectCurrentMonth);

  const dataToDisplay = showIncome ? incomeData : expenseData;

  useEffect(() => {
    setCurrentYear(storeCurrentYear);
    setCurrentMonth(storeCurrentMonth);
  }, [storeCurrentYear, storeCurrentMonth, currentMonth, currentYear]);

  const changeComponentVisibility = () => {
    setShowIncome(!showIncome);
  };

  const select = useSelector(selectCategoryData);

  let transformedData = [];

  if (select && Array.isArray(select.report)) {
    transformedData = select.report.map(item => ({
      label: item.description,
      value: item.amount.toString(),
    }));
  } else {
    console.error('select is null or select.report is not an array');
  }

  console.log('DATA', transformedData);

  return (
    <div>
      <ReportBoxWrapper>
        {showIncome ? (
          <Income
            dataToDisplay={dataToDisplay}
            setSelectedCategory={setSelectedCategory}
            changeComponentVisibility={changeComponentVisibility}
          />
        ) : (
          <Expenses
            dataToDisplay={dataToDisplay}
            setSelectedCategory={setSelectedCategory}
            changeComponentVisibility={changeComponentVisibility}
          />
        )}
      </ReportBoxWrapper>
      <ChartWrapper>
        <Chart data={transformedData} categories={selectedCategory} />
      </ChartWrapper>
    </div>
  );
}
