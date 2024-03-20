import { BalanceReportBox, ReportWrapper } from 'styles/ReportPage/ReportPage';

import BackgroundTemplate from 'components/Background/Background';
import Header from 'components/Header/Header';
import { BalanceReport } from 'components/Report/ReportButtons';
import { BalanceReportPage } from 'components/ReportPage/BalanceReportPage';
import { ExpIncInfo } from 'components/ExpIncSummary/ExpIncSummary';
import { ReportBox } from 'components/ReportBox/ReportBox';

export function ReportPage() {
  return (
    <div>
      <Header />
      <ReportWrapper>
        <BackgroundTemplate />
        <BalanceReportBox>
          <BalanceReport />
        </BalanceReportBox>
        <BalanceReportPage />
        <ExpIncInfo />
        <ReportBox />
      </ReportWrapper>
    </div>
  );
}

export default ReportPage;
