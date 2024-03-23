import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from 'pages/Home';
import Layout from 'components/Layout/Layout';
import Finance from 'pages/Finance';
import ReportPage from 'pages/ReportPage';
import { selectIsLogged } from '../redux/selectors';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLogged);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
            <Route path="/" element={<Finance />}></Route>
          ) : (
            <Route path="/" element={<Home />} />
          )}
          {isLoggedIn && <Route path="/reports" element={<ReportPage />} />}
          {isLoggedIn && <Route path="/finance" element={<Finance />} />}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
