import { useRecoilValue } from 'recoil';
import { NavBar, SideMenu, NotificationPopup } from '@component/.';
import { layoutState as loState } from '@stores/layout';
import { useEffect } from 'react';

export const YoutubeLayout = () => {
  const layoutStateValue = useRecoilValue(loState);

  const handleClick = (e: MouseEvent) => {
    console.log(e.clientX, e.clientY);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 document에 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleClick);

    return () => {
      // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <NavBar />
      <SideMenu expanded={layoutStateValue.sideMenuExpanded} />
      {layoutStateValue.notificationPopupVisible && <NotificationPopup />}
    </>
  );
};
