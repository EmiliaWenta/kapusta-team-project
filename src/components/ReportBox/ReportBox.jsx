import { useState, useEffect } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';
import { ChartWrapper, ReportBoxWrapper } from 'styles/ReportBox/ReportBox';
import { Chart } from 'components/Chart/Chart.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectExpenses,
  selectToken,
  selectIncome,
} from '../../redux/selectors';
import { getIncome, getExpenses } from '../../redux/operations';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const expenseData = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const incomeData = useSelector(selectIncome);

  useEffect(() => {
    dispatch(getIncome(token));
    dispatch(getExpenses(token));
  }, [dispatch, token]);

  const changeComponentVisibility = () => {
    setShowIncome(!showIncome);
  };

  const dataToDisplay = showIncome ? incomeData : expenseData;
  return (
    <div>
      <ReportBoxWrapper>
        {showIncome ? (
          <Income
            setSelectedCategory={setSelectedCategory}
            changeComponentVisibility={changeComponentVisibility}
          />
        ) : (
          <Expenses
            setSelectedCategory={setSelectedCategory}
            changeComponentVisibility={changeComponentVisibility}
          />
        )}
      </ReportBoxWrapper>
      <ChartWrapper>
        {selectedCategory && (
          <Chart
            data={dataToDisplay.filter(
              transaction => transaction.category === selectedCategory
            )}
            categories={selectedCategory}
          />
        )}
      </ChartWrapper>
    </div>
  );
}
