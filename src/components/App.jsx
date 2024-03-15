import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Layout from 'components/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
