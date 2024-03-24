import { StyledTableHeader } from 'styles/TransactionTable';

export const TableHeader = () => {
  return (
    <StyledTableHeader>
      <tr>
        <th colSpan={2}>SUMMARY</th>
      </tr>
    </StyledTableHeader>
  );
};
