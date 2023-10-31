import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './pages/Content/components/Content';

const Text = lazy(() => import('./pages/Text'));
const Dog = lazy(() => import('./pages/Dog/components/Dog'));

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/*" element={<Content />} />
        <Route path="/text" element={<Text />} />
        <Route path="/dog" element={<Dog />} />
      </Routes>
    </Suspense>
  );
};
