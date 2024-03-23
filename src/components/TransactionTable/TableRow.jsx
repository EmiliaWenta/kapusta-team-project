import { useSelector } from 'react-redux';
import { DeleteIcon } from '../buttons/DeleteIcon';
import { ColoredTextCell, StyledIconCell } from 'styles/TransactionTable';
import { selectTransactionType } from '../../redux/selectors';
import { parseISO, format } from 'date-fns';

export const TableRow = ({ item, deleteIcon }) => {
  const transactionType = useSelector(selectTransactionType);
  let amount;
  const originalDate = item.date;
  const parsedDate = parseISO(originalDate);
  const formattedDate = format(parsedDate, 'yyyy-MM-dd');

  transactionType === 'Expenses'
    ? (amount = -item.amount)
    : (amount = item.amount);

  if (!amount) {
    return <tr></tr>;
  }

  return (
    <tr>
      <td style={{ width: '200px' }}>{formattedDate}</td>
      <td style={{ width: '200px' }}>{item.description}</td>
      <td style={{ width: '200px' }}>{item.category}</td>
      <ColoredTextCell value={amount}>{`${amount} PLN`}</ColoredTextCell>

      {deleteIcon && (
        <StyledIconCell>
          <DeleteIcon />
        </StyledIconCell>
      )}
    </tr>
  );
};
