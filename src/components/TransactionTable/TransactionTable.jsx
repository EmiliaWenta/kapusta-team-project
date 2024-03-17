import {
  StyledTable,
  StyledTableBody,
  StyledTableContainer,
} from '../../styles/TransactionTable.jsx';

import { TableRow } from './TableRow.jsx';
import { TableHeader } from './TableHeader.jsx';

export const TransactionTable = ({ items, headers, columns }) => {
  const rowsToAdd = Math.max(0, 9 - items.length);

  const emptyRows = Array.from({ length: rowsToAdd }, (_, index) => ({
    id: `empty_${index}`,
  }));

  const allItems = [...items, ...emptyRows];
  return (
    <StyledTableContainer>
      <StyledTable>
        <TableHeader headers={headers} deleteIcon={true} />
        <StyledTableBody>
          {allItems.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              columns={columns}
              deleteIcon={true}
            />
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};
