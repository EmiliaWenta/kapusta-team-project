import {
  StyledTable,
  StyledTableBody,
  StyledTableContainer,
} from '../../styles/TransactionTable.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { TableRow } from './TableRow.jsx';
import { TableHeader } from './TableHeader.jsx';
import { useEffect, useState } from 'react';
import {
  selectAddedTransaction,
  selectDeletedId,
  selectToken,
  selectTransactionType,
} from '../../redux/selectors.js';
import { getExpenses, getIncome } from '../../redux/operations.js';

export const TransactionTable = ({ headers, columns }) => {
  const transactionType = useSelector(selectTransactionType);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [items, setItems] = useState([]);
  const addedTransaction = useSelector(selectAddedTransaction);
  const deletedId = useSelector(selectDeletedId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (transactionType === 'Expenses') {
          const expensesData = await dispatch(getExpenses(token));
          setItems(expensesData.payload);
        } else {
          const incomeData = await dispatch(getIncome(token));
          setItems(incomeData.payload);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, transactionType, token, addedTransaction, deletedId]);

  const rowsToAdd = Math.max(0, 9 - (items.length || 0));

  const emptyRows = Array.from({ length: rowsToAdd }, (_, index) => ({
    id: `empty_${index}`,
  }));

  const allItems = [...items, ...emptyRows];

  return (
    <StyledTableContainer>
      <StyledTable>
        <TableHeader headers={headers} deleteIcon={true} />
        <StyledTableBody>
          {allItems.map((item, index) => (
            <TableRow key={index} item={item} deleteIcon={true} />
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};
