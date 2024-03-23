import { useDispatch, useSelector } from 'react-redux';

import { ColoredTextCell, StyledIconCell } from 'styles/TransactionTable';
import { selectToken, selectTransactionType } from '../../redux/selectors';
import { parseISO, format } from 'date-fns';
import { StyledButtonSvg, StyledSvg } from '../../styles/button.jsx';
import sprite from '../../svg/icons_sprite.svg';
import { deleteTransaction } from '../../redux/operations';

export const TableRow = ({ item, deleteIcon }) => {
  const transactionType = useSelector(selectTransactionType);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const originalDate = item.date;
  let formattedDate;
  if (originalDate) {
    const parsedDate = parseISO(originalDate);
    formattedDate = format(parsedDate, 'yyyy-MM-dd');
  } else {
    formattedDate = '';
  }
  let amount;

  transactionType === 'Expenses'
    ? (amount = -item.amount)
    : (amount = item.amount);

  const handleDelete = event => {
    const credentials = {
      id: event.currentTarget.id,
      token,
      type: transactionType,
    };
    dispatch(deleteTransaction(credentials));
  };

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
          <StyledButtonSvg id={item._id} onClick={handleDelete} type="button">
            <StyledSvg width="18" height="18">
              <use href={sprite + `#delete`}></use>
            </StyledSvg>
          </StyledButtonSvg>
        </StyledIconCell>
      )}
    </tr>
  );
};
