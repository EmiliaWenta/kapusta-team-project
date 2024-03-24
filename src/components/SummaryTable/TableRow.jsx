import { DeleteIcon } from '../buttons/DeleteIcon';
import { StyledIconCell } from 'styles/TransactionTable';

export const TableRow = ({ item, deleteIcon }) => {
  const keys = Object.keys(item);

  return (
    <tr>
      {keys.map((key, index) => (
        <td key={index}>
          {typeof item[key] === 'string' ? item[key].toUpperCase() : item[key]}
        </td>
      ))}
      {deleteIcon && (
        <StyledIconCell>
          <DeleteIcon />
        </StyledIconCell>
      )}
    </tr>
  );
};
