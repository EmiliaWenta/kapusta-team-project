import React from 'react';
import { ExpensesGrid, IncomeGrid } from 'styles/ReportPage/TempGrid';

export function TempGrid({ showIncome }) {
  return <div>{showIncome ? <IncomeGrid /> : <ExpensesGrid />}</div>;
}

export default TempGrid;
