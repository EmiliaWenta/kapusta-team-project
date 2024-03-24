export const TableRow = ({ item }) => {
  if (!item || Object.keys(item).length === 0) {
    return (
      <tr>
        <td colSpan="2"></td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{item.month ? item.month.toUpperCase() : ''}</td>
      <td>{item.sum}</td>
    </tr>
  );
};
