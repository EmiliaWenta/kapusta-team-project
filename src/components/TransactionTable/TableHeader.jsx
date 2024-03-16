import { StyledTableHeader } from 'styles/TransactionTable';

export const TableHeader = ({ headers, deleteIcon }) => {
  return (
    <StyledTableHeader>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header.toUpperCase()}</th>
        ))}
        {deleteIcon && <th></th>}
      </tr>
    </StyledTableHeader>
  );
};
