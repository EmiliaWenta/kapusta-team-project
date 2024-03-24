import BackgroundTemplate from 'components/Background/Background';
import { Balance } from 'components/Balance/Balance';
import { Report } from 'components/Report/Report';
import { Tabs } from 'components/WalletTabs';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { SummaryTable } from 'components/SummaryTable/SummaryTable';
import headers from '../components/TransactionTable/headers.json';
import transactions from '../components/TransactionTable/transactions.json';
import {
  StyledFinance,
  TableWrapper,
  ReportWrapper,
  BalanceWrapper,
  ExpensesWrapper,
  TransactionWrapper,
} from '../styles/Finance/finance';
import MobileButtonBack from 'components/buttons/MobileButtonBack';
import ArrowBack from 'components/buttons/ArrowBackButton';

const Finance = () => {
  return (
    <StyledFinance>
      <BackgroundTemplate />
      <MobileButtonBack />
      <BalanceWrapper>
        <Balance />
        <ReportWrapper>
          <Report />
        </ReportWrapper>
      </BalanceWrapper>
      <ExpensesWrapper>
        <Tabs />
        <TableWrapper>
          <ArrowBack />
          <InputTransactionForm />
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
