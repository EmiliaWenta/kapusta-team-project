import { useState } from 'react';
import {
  Container,
  Box,
  Outlet,
  TabLink,
  TransactWrapper,
  TabWrapper,
} from '../styles/walletTabs';
import { setTransactionType } from './../redux/pageSettingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getExpences, getIncome } from './../redux/operations';
import { selectToken } from './../redux/selectors';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleTab1 = () => {
    setActiveTab('tab1');
    dispatch(setTransactionType('Expences'));
    dispatch(getExpences(token));
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
    dispatch(setTransactionType('Income'));
    dispatch(getIncome(token));
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
