import { BalanceReportBox, ReportWrapper } from 'styles/ReportPage/ReportPage';

import BackgroundTemplate from 'components/Background/Background';
import Header from 'components/Header/Header';
import { BalanceReport } from 'components/Report/ReportButtons';
import { BalanceReportPage } from 'components/ReportPage/BalanceReportPage';
import { ExpIncInfo } from 'components/ExpIncSummary/ExpIncSummary';
import { ReportBox } from 'components/ReportBox/ReportBox';
import { TempGrid } from 'components/ReportPage/TempGrid';

export function ReportPage() {
  const isWideScreen = window.innerWidth <= 768;
  return (
    <div>
      <Header />
      <ReportWrapper>
        <BackgroundTemplate />
        <BalanceReportBox>
          <BalanceReport />
          {isWideScreen && <BalanceReportPage />}
          {/* <BalanceReportPage /> */}
        </BalanceReportBox>
        <ExpIncInfo />
        <ReportBox />
        <TempGrid />
      </ReportWrapper>
    </div>
  );
}

export default ReportPage;
