import { StyledTableHeader } from 'styles/TransactionTable';

export const TableHeader = ({ deleteIcon }) => {
  return (
    <StyledTableHeader>
      <tr>
        <th colSpan={2}>SUMMARY</th>
        {deleteIcon && <th></th>}
      </tr>
    </StyledTableHeader>
  );
};
