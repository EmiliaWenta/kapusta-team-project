import { Outlet } from 'react-router-dom';

import CabbagesBg from 'components/Background/Background';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <CabbagesBg></CabbagesBg>
    </>
  );
};

export default Layout;
