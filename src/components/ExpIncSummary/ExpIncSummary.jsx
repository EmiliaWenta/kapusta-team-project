import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  ExpIncBox,
  ExpIncDivider,
  ExpIncList,
  ExpIncListItem,
  ExpIncText,
  ExpIncTextRed,
  ExpIncTextGreen,
} from 'styles/ExpIncSummary';
import { selectReportData, selectToken } from '../../redux/selectors';
import { getDetailedReport } from '../../redux/operations';

export function ExpIncInfo({ selectedMonth, selectedYear }) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const credentials = { selectedMonth, selectedYear };
        await dispatch(getDetailedReport({ token, credentials }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, token, selectedMonth, selectedYear]);

  const reportData = useSelector(selectReportData);
  const expenses = reportData?.report?.Expenses || 0;
  const income = reportData?.report?.Income || 0;
  return (
    <ExpIncBox>
      <ExpIncList>
        <ExpIncListItem>
          <ExpIncText>Expenses:</ExpIncText>
          <ExpIncTextRed>-{expenses} PLN.</ExpIncTextRed>
        </ExpIncListItem>
        <ExpIncDivider />
        <ExpIncListItem>
          <ExpIncText>Income:</ExpIncText>
          <ExpIncTextGreen>+ {income} PLN.</ExpIncTextGreen>
        </ExpIncListItem>
      </ExpIncList>
    </ExpIncBox>
  );
}
