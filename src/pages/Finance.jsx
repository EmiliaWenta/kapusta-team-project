import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BalanceWrappComp } from 'components/FinanceBox/BallanceWrapper';
import { TransactionForm } from 'components/FinanceBox/InputWrapper';
import { Tabs } from 'components/WalletTabs';
import { TransactionTable } from '../components/TransactionTable/TransactionTable';
import { SummaryTable } from '../components/SummaryTable/SummaryTable';
import headers from '../components/TransactionTable/headers.json';
import transactions from '../components/TransactionTable/transactions.json';
import { DatePickerComponent } from 'components/DatePicker/DatePicker';
import {
  TableWrapper,
  BalanceWrapper,
  StyledFinance,
  ExpensesWrapper,
  InputWrapper,
  TransactionWrapper,
} from '../styles/Finance/finance';
import { TransactionDataInMobile } from 'components/TransactionDataInMobile/TransactionDataInMobile';

export const Finance = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //   return (
  //     <StyledFinance>
  //       {location.pathname === '/finance' ? (
  //         <BalanceWrapper>
  //           <BalanceWrappComp />

  //           {!isMobileView ? null : <DatePickerComponent />}
  //         </BalanceWrapper>
  //       ) : (
  //         <InputWrapper>
  //           <TransactionForm navigate={navigate} path="/financebox/finance" />
  //           {isMobileView ? null : <DatePickerComponent />}
  //         </InputWrapper>
  //       )}
  //       <ExpensesWrapper>
  //         <Tabs />

  //         <TableWrapper>
  //           <TransactionWrapper>
  //             <TransactionTable headers={headers} items={transactions} />
  //             <SummaryTable items={transactions} />
  //           </TransactionWrapper>
  //         </TableWrapper>
  //       </ExpensesWrapper>
  //     </StyledFinance>
  //   );
  // };
  return (
    <StyledFinance>
      {location.pathname === '/finance' ? (
        <BalanceWrapper>
          <BalanceWrappComp />
          {isMobileView && <DatePickerComponent />}
        </BalanceWrapper>
      ) : (
        <InputWrapper>
          <TransactionForm navigate={navigate} path="/financebox/finance" />
          {!isMobileView && <DatePickerComponent />}
        </InputWrapper>
      )}
      <ExpensesWrapper>
        <InputWrapper></InputWrapper>
        <Tabs />
        <TableWrapper>
          <TransactionWrapper>
            {/* tutaj */}
            {!isMobileView && (
              <TransactionForm navigate={navigate} path="/financebox/finance" />
            )}

            {/* i tutaj */}
            {isMobileView ? (
              <TransactionDataInMobile id="transdata" />
            ) : (
              <>
                <TransactionTable headers={headers} items={transactions} />
                <SummaryTable items={transactions} />
              </>
            )}
          </TransactionWrapper>
        </TableWrapper>
      </ExpensesWrapper>
    </StyledFinance>
  );
};

export default Finance;
