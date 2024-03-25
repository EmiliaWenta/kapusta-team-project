import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectTransactionType } from '../../redux/selectors';
import { parseISO, format } from 'date-fns';
import { StyledButtonSvg, StyledSvg } from '../../styles/button.jsx';
import sprite from '../../svg/icons_sprite.svg';
import { deleteTransaction } from '../../redux/operations';
import {
  StyledLi,
  StyledDiv1,
  StyledDiv2,
  StyledDescription,
  ColoredParagraph,
} from '../../styles/TransactionDataInMobile';

export const DataItem = ({ item }) => {
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
    <StyledLi>
      <StyledDiv1>
        <StyledDescription>{item.description}</StyledDescription>

        <StyledDiv2>
          <p>{formattedDate}</p>
          <p>{item.category}</p>
        </StyledDiv2>
      </StyledDiv1>
      <ColoredParagraph value={amount}>{`${amount} PLN`}</ColoredParagraph>

      <StyledButtonSvg id={item._id} onClick={handleDelete} type="button">
        <StyledSvg width="18" height="18">
          <use href={sprite + `#delete`}></use>
        </StyledSvg>
      </StyledButtonSvg>
    </StyledLi>
  );
};
