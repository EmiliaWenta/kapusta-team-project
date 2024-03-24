import { useState } from 'react';
import { BalanceWrappComp } from 'components/FinanceBox/BallanceWrapper';
import TransactionForm from 'components/FinanceBox/InputWrapper';
import { Tabs } from 'components/WalletTabs';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { SummaryTable } from 'components/SummaryTable/SummaryTable';
import headers from '../components/TransactionTable/headers.json';
import transactions from '../components/TransactionTable/transactions.json';

import {
  StyledFinance,
  TableWrapper,
  //ReportWrapper,
  BalanceWrapper,
  ExpensesWrapper,
  InputWrapper,
  TransactionWrapper,
} from '../styles/Finance/finance';

const Finance = () => {
  const [showBalancePage, setShowBalancePage] = useState(true);

  const changeComponentVisibility = () => {
    setShowBalancePage(!showBalancePage);
  };
  return (
    <StyledFinance>
      {showBalancePage ? (
        <BalanceWrapper>
          <BalanceWrappComp
            changeComponentVisibility={changeComponentVisibility}
          />
        </BalanceWrapper>
      ) : (
        <InputWrapper>
          <TransactionForm
            changeComponentVisibility={changeComponentVisibility}
          />
        </InputWrapper>
      )}
      <ExpensesWrapper>
        <Tabs />
        <TableWrapper>
          <TransactionWrapper>
            <TransactionTable headers={headers} />
            <SummaryTable items={transactions} />
          </TransactionWrapper>
        </TableWrapper>
      </ExpensesWrapper>
    </StyledFinance>
  );
};

export default Finance;
