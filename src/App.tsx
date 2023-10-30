import { RecoilRoot, useSetRecoilState } from 'recoil';

import './App.css';
import { AppRouter } from './AppRouter';
import { YoutubeLayout } from '@component/templates/YoutubeLayout';
import Content from './pages/Content/components/Content';
import { useEffect } from 'react';
import { layoutState as loState } from '@stores/layout';

function App() {
  //initial render
  const setLayoutState = useSetRecoilState(loState);
  let timer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.innerWidth < 1024 && window.innerWidth >= 586) {
          setLayoutState((prev) => ({ ...prev, size: 'tablet' }));
        } else if (window.innerWidth < 586) {
          setLayoutState((prev) => ({ ...prev, size: 'mobile' }));
        } else {
          setLayoutState((prev) => ({ ...prev, size: 'pc' }));
        }
      }, 100);
    });
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
