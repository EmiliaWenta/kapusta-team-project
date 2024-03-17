import { useState } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);

  const changeComponentVisibility = () => {
    setShowIncome(!showIncome);
  };
  return (
    <div>
      {showIncome ? (
        <Income changeComponentVisibility={changeComponentVisibility} />
      ) : (
        <Expenses changeComponentVisibility={changeComponentVisibility} />
      )}
    </div>
  );
}
