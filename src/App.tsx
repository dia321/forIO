import { RecoilRoot } from 'recoil';

import './App.css';
import { AppRouter } from './AppRouter';
import { YoutubeLayout } from '@component/templates/YoutubeLayout';
import Content from './pages/Content/components/Content';
import { useEffect } from 'react';

function App() {
  //initial render
  useEffect(() => {
    window.addEventListener('resize', () => {});
  }, []);
  return (
    <RecoilRoot>
      <YoutubeLayout />
      <Content />
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
