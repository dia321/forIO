import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chart from './pages/Chart/components/Chart';

const Text = lazy(() => import('./pages/Text'));
const Dog = lazy(() => import('./pages/Dog/components/Dog'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/text" element={<Text />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Suspense>
  );
};
