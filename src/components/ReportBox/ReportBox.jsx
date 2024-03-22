import { useState } from 'react';
import { Expenses } from './Expenses';
import { Income } from './Income';
import { ReportBoxWrapper } from 'styles/ReportBox/ReportBox';
import TempGrid from 'components/ReportPage/TempGrid';

export function ReportBox() {
  const [showIncome, setShowIncome] = useState(false);

  const changeComponentVisibility = () => {
    setShowIncome(!showIncome);
  };
  return (
    <div>
      <ReportBoxWrapper>
        {showIncome ? (
          <Income changeComponentVisibility={changeComponentVisibility} />
        ) : (
          <Expenses changeComponentVisibility={changeComponentVisibility} />
        )}
      </ReportBoxWrapper>
      <TempGrid showIncome={showIncome} />
    </div>
  );
}
