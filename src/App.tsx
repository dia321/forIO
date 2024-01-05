import { useRecoilValue, useSetRecoilState } from 'recoil';

import './App.css';
// import { AppRouter } from './AppRouter';
import { YoutubeLayout } from '@component/templates/YoutubeLayout';
import { useEffect } from 'react';
import { layoutElementState } from '@stores/layout';
import { contentSelectorState } from '@stores/content/selector';
import { activeState } from '@stores/menu';
import Content from './pages/Content/components/Content';
import About from './pages/About/components/About';
import Contact from './pages/Contact/components/Contact';
import Container from '@component/organisms/container/Container';
import { PopAlert } from './components';

function App() {
  //initial render
  const setSize = useSetRecoilState(layoutElementState('size'));
  const setInfo = useSetRecoilState(contentSelectorState('contentInfo'));

  const active = useRecoilValue(activeState);
  let timer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    const sizeChecker = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 586) return 'mid-tablet';
      else if (window.innerWidth < 800 && window.innerWidth >= 586) return 'tablet';
      else if (window.innerWidth < 586) return 'mobile';
      else return 'laptop';
    };

    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSize(sizeChecker());
      }, 100);
    });
  }, []);
  useEffect(() => {
    const info = [] as { views: string; time: string }[];
    for (let i = 0; i < 4; i++) {
      const b100 = Math.floor(Math.random() * 1000);
      const c1000 = Math.floor(Math.random() * 10);
      const m10000 = Math.floor(Math.random() * 10);
      const h24 = Math.floor(Math.random() * 24);
      const d30 = Math.floor(Math.random() * 30);
      const m12 = Math.floor(Math.random() * 12);
      const y = Math.floor(Math.random() * 3);
      const infoObj = {} as { views: string; time: string };
      //0~1 백, 1~2 천, 2~3 만
      const randomViewUnit = Math.random() * 3;
      infoObj.views =
        randomViewUnit < 1
          ? `${!b100 ? '1' : b100 === 1000 ? '1천' : b100}`
          : randomViewUnit < 2
          ? `${c1000 ? c1000 : 1}천`
          : `${m10000 ? m10000 : 1}만`;
      // 0~1 시간, 1~2 일, 2~3 주, 3~4 달
      const randomTimeUnit = Math.random() * 4;
      infoObj.time =
        randomTimeUnit < 1
          ? !h24
            ? '1시간'
            : h24 === 24
            ? '1일'
            : `${h24}시간`
          : randomTimeUnit < 2
          ? !d30
            ? '1일'
            : d30 === 30
            ? '1달'
            : `${d30}일`
          : randomTimeUnit < 3
          ? !m12
            ? '1달'
            : m12 === 12
            ? '1년'
            : `${m12}달`
          : !y
          ? '1년'
          : `${y}년`;
      info.push(infoObj);
    }
    setInfo(info);
  }, []);
  return (
    <>
      <YoutubeLayout />
      {/* <AppRouter /> */}
      <Container>{active === 0 ? <Content /> : active === 1 ? <About /> : <Contact />}</Container>
      <PopAlert />
    </>
  );
}

export default App;
