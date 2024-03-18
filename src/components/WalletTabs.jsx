import { useState } from 'react';
import {
  Container,
  Box,
  Outlet,
  TabLink,
  TransactWrapper,
  TabWrapper,
} from '../styles/walletTabs';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };
  return (
    <Container>
      <Box>
        <TabLink
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={handleTab1}
        >
          <span>Expenses</span>
        </TabLink>
        <TabLink
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={handleTab2}
        >
          <span>Income</span>
        </TabLink>
      </Box>

      <Outlet>
        {activeTab === 'tab1' ? (
          <>
            <TabWrapper>
              <TransactWrapper />
            </TabWrapper>
          </>
        ) : (
          <>
            <TabWrapper>
              <TransactWrapper />
            </TabWrapper>
          </>
        )}
      </Outlet>
    </Container>
  );
};
