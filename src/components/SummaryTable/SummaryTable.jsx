import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  selectTransactionType,
  selectToken,
  selectExpensesReport,
  selectIncomeReport,
} from '../../redux/selectors.js';
import { StyledTable, StyledTableBody } from '../../styles/SummaryTable.jsx';
import { monthsMap } from './Months.jsx';
import { TableRow } from './TableRow.jsx';
import { TableHeader } from './TableHeader.jsx';
import { getExpensesReport, getIncomeReport } from '../../redux/operations.js';

export const SummaryTable = ({ items }) => {
  const transactionType = useSelector(selectTransactionType);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const expensesReport = useSelector(selectExpensesReport);
  const incomeReport = useSelector(selectIncomeReport);
  const [report, setReport] = useState([]);

  useEffect(() => {
    if (transactionType === 'Expenses') {
      dispatch(getExpensesReport(token));
    } else {
      dispatch(getIncomeReport(token));
    }
  }, [dispatch, transactionType, token]);

  useEffect(() => {
    if (transactionType === 'Expenses') {
      setReport(expensesReport);
    } else {
      setReport(incomeReport);
    }
  }, [expensesReport, incomeReport, transactionType, report]);

  const transformedReport = report
    ? Object.entries(report).map(([key, value]) => {
        // eslint-disable-next-line no-unused-vars
        const [year, month] = key.split('-');
        const monthName = monthsMap[parseInt(month)];
        return { month: monthName, sum: value };
      })
    : [];

  return (
    <StyledTable>
      <TableHeader deleteIcon={false} />
      <StyledTableBody>
        {transformedReport.map((item, index) => (
          <TableRow key={index} item={item} deleteIcon={false} />
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};
