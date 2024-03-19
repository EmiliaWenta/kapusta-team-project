// import { Route, Routes } from 'react-router-dom';
import ExpSummaryGrid from './ExpSummaryGrid/ExpSummaryGrid';

// import Home from 'pages/Home';
// import Layout from 'components/Layout/Layout';
// import { RestricterRoute } from './RestrictedRoute';

export const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RestricterRoute component={Home} path="" />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes> */}
      <ExpSummaryGrid />
    </div>
  );
};
