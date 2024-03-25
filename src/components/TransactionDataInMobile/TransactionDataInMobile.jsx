import {
  StyledDataWrapper,
  StyledDataList,
} from '../../styles/TransactionDataInMobile.jsx';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from 'react';
import {
  selectAddedTransaction,
  selectDeletedId,
  selectToken,
  selectTransactionType,
} from '../../redux/selectors.js';
import { getExpenses, getIncome } from '../../redux/operations.js';
import { DataItem } from './DataItem.jsx';

export const TransactionDataInMobile = () => {
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

  return (
    <StyledDataWrapper>
      <StyledDataList>
        {items.map((item, index) => (
          <DataItem key={index} item={item} />
        ))}
      </StyledDataList>
    </StyledDataWrapper>
  );
};
