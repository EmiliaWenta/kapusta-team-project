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
  BalanceWrapper,
  ExpensesWrapper,
  TransactionWrapper,
} from '../styles/Finance/finance';

const Finance = () => {
  return (
    <StyledFinance>
      <BackgroundTemplate />
      <BalanceWrapper>
        <Balance />
        <Report />
      </BalanceWrapper>
      <ExpensesWrapper>
        <Tabs />

        <TableWrapper>
          <InputTransactionForm />
          <TransactionWrapper>
            <TransactionTable
              items={transactions}
              headers={headers}
              columns={headers}
            />
            <SummaryTable items={transactions} />
          </TransactionWrapper>
        </TableWrapper>
      </ExpensesWrapper>
    </StyledFinance>
  );
};

export default Finance;
