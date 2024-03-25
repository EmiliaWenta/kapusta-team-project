import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';

import { Report } from 'components/Report/Report';
import { ReportWrapper, BalanceWrapper } from '../../styles/Finance/finance';
import { MobileButtonBack } from './FinanceButtons';
import {
  StyledMobileButton,
  StyledBalance,
} from '../../styles/Finance/financeBox';
export function BalanceWrappComp() {
  const [showBalanceWrapp, setShowBalanceWrapp] = useState(false);
  const navigate = useNavigate();

  const changeComponentVisibility = () => {
    setShowBalanceWrapp(!showBalanceWrapp);
    navigate('/FinanceBox/InputWrapper.jsx');
  };

  return (
    <BalanceWrapper changeComponentVisibility={changeComponentVisibility}>
      {showBalanceWrapp && <Balance />}
      <StyledMobileButton>
        <MobileButtonBack
          buttonText="TO TRANSACTION"
          navigate={navigate}
          path="/financebox/inputwrapper"
        />
      </StyledMobileButton>
      <StyledBalance>
        <Balance />
      </StyledBalance>
      <ReportWrapper>
        <Report />
      </ReportWrapper>
    </BalanceWrapper>
  );
}
