import { StyledTable, StyledTableBody } from '../../styles/SummaryTable.jsx';

import { TableRow } from './TableRow.jsx';
import { TableHeader } from './TableHeader.jsx';

export const SummaryTable = ({ items }) => {
  return (
    <StyledTable>
      <TableHeader deleteIcon={false} />
      <StyledTableBody>
        {items.map((item, index) => (
          <TableRow key={index} item={item} deleteIcon={false} />
        ))}
      </StyledTableBody>
    </StyledTable>
  );
};
