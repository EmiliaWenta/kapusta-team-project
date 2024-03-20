import { useState } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';
import { ReportBoxWrapper } from 'styles/ReportBox/ReportBox';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);

  const changeComponentVisibility = () => {
    setShowIncome(!showIncome);
  };
  return (
    <ReportBoxWrapper>
      {showIncome ? (
        <Income changeComponentVisibility={changeComponentVisibility} />
      ) : (
        <Expenses changeComponentVisibility={changeComponentVisibility} />
      )}
    </ReportBoxWrapper>
  );
}
