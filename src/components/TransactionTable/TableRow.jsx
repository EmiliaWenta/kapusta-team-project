import { DeleteIcon } from '../buttons/DeleteIcon';
import { ColoredTextCell, StyledIconCell } from 'styles/TransactionTable';

export const TableRow = ({ item, columns, deleteIcon }) => {
  return (
    <tr>
      {columns.map((column, index) =>
        index === 3 ? (
          <ColoredTextCell value={item[column]} key={index}>
            {item[column]}
          </ColoredTextCell>
        ) : (
          <td style={{ width: '200px' }} key={index}>
            {item[column]}
          </td>
        )
      )}

      {deleteIcon && (
        <StyledIconCell>
          <DeleteIcon />
        </StyledIconCell>
      )}
    </tr>
  );
};
