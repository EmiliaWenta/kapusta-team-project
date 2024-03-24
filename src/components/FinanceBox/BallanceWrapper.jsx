import { useState } from 'react';
import { Balance } from 'components/Balance/Balance';
import { Report } from 'components/Report/Report';
import { ReportWrapper, BalanceWrapper } from '../../styles/Finance/finance';
import { MobileButtonBack } from './FinanceButtons';

export function BalanceWrappComp() {
  const [showBalanceWrapp, setShowBalanceWrapp] = useState(false);

  const changeComponentVisibility = () => {
    setShowBalanceWrapp(!showBalanceWrapp);
  };
  return (
    <BalanceWrapper changeComponentVisibility={changeComponentVisibility}>
      <MobileButtonBack />
      <Balance />
      <ReportWrapper>
        <Report />
      </ReportWrapper>
    </BalanceWrapper>
  );
}
