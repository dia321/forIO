import { useSetRecoilState } from 'recoil';

import './App.css';
import { AppRouter } from './AppRouter';
import { YoutubeLayout } from '@component/templates/YoutubeLayout';
import { useEffect } from 'react';
import { layoutState as loState } from '@stores/layout';

function App() {
  //initial render
  const setLayoutState = useSetRecoilState(loState);
  let timer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    const sizeChecker = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 586) return 'tablet';
      else if (window.innerWidth < 586) return 'mobile';
      else return 'laptop';
    };

    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setLayoutState((prev) => ({ ...prev, size: sizeChecker() }));
      }, 100);
    });
  }, []);
  return (
    <>
      <YoutubeLayout />
      <AppRouter />
    </>
  );
}

export default App;
