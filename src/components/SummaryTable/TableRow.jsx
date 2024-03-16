import { DeleteIcon } from '../buttons/DeleteIcon';
import { StyledIconCell } from 'styles/TransactionTable';

export const TableRow = ({ item, deleteIcon }) => {
  const keys = Object.keys(item);

  return (
    <tr>
      {keys.map((key, index) => (
        <td key={index}>{item[key].toUpperCase()}</td>
      ))}
      {deleteIcon && (
        <StyledIconCell>
          <DeleteIcon />
        </StyledIconCell>
      )}
    </tr>
  );
};
