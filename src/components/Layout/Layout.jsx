import { Outlet } from 'react-router-dom';

import BackgroundTemplate from 'components/Background/Background';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <BackgroundTemplate></BackgroundTemplate>
    </>
  );
};

export default Layout;
